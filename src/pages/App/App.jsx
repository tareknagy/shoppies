import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/user-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewNominations from '../NewNominations/NewNominations';
import Nominations from '../../components/Nominations/Nominations'
import NavBar from '../../components/NavBar/NavBar';


export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ? 
        <>
          <NavBar user={user} setUser={setUser} />
          <Switch>
            <Route path="/nominations/new">
              <NewNominations user={user} setUser={setUser} />
            </Route>
            <Route path="/nominations">
              <Nominations />
            </Route>
            <Redirect to="/nominations" />
          </Switch>
        </>
      :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

