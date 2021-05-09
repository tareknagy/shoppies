import { useState } from 'react';
import { login } from '../../utilities/user-service';
import '../../pages/AuthPage/AuthPage.css';

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const user = await login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <>
      <h1>Login to nominate</h1>
      <div className="form-container" onSubmit={handleSubmit}>
        <form autoComplete="off" >
          <input className="shadow" type="text" name="email" value={credentials.email} onChange={handleChange} placeholder="Enter email.." required /><br />
          <input className="shadow" type="password" name="password" value={credentials.password} onChange={handleChange} placeholder="Enter password.." required />
          <button type="submit">Login</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </>
  );
}