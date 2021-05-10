import { Component } from 'react';
import { signUp } from '../../utilities/user-service';

export default class SignUpForm extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    };

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
            error: ''
        });
    };

    handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            const {name, email, password} = this.state;
            const formData = {name, email, password};
            const user = await signUp(formData);
            this.props.setUser(user);
        } catch {
            this.setState({ error: 'Sign Up Failed - password must be at least 3 characters long!' })
        } 
    };
    
    render() {
        const disable = this.state.password !== this.state.confirm;
        return (
            <>
                <h1>Sign up to nominate</h1>
                <div className="form-container">
                    <form autoComplete="off" onSubmit={this.handleSubmit}>
                    <input className="shadow"  type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Enter name.." required /><br />
                    <input className="shadow"  type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Enter email.." required /><br />
                    <input className="shadow"  type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Enter password.." required /><br />
                    <input className="shadow"  type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} placeholder="Re-Enter password.." required /><br />
                    <button type="submit" disabled={disable}>Sign Up</button>
                    </form>
                </div>
                <p className="error-message">&nbsp;{this.state.error}</p>
            </>
        );
    }
}