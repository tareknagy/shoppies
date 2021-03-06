import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/user-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewNominations from '../NewNominations/NewNominations';
import NavBar from '../../components/NavBar/NavBar';
import Landing from '../../components/Landing/Landing';


export default function App() {
  const [user, setUser] = useState(getUser());
  const [enter, setEnter] = useState(false);

  function enterPage() {
    setEnter(!enter);
  }

  return (
    <main className="App">
      { user ? 
        <>
          <NavBar user={user} setUser={setUser} />
            <Switch>
              <div id="container" className={enter ? 'container-enter' : 'container-intro'}>
                <Route path="/nominations">
                  <Landing enterPage={enterPage} />
                  <NewNominations user={user} setUser={setUser} />
                </Route>
                <Redirect to="/nominations" />
              </div>
            </Switch>
        </>
      :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

