import { Link } from 'react-router-dom';
import * as userService from '../../utilities/user-service';
import './NavBar.css';

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      {/* <NavLink exact activeStyle={{backgroundColor: 'yellow'}} to="/nominations">Nominations</NavLink>
      &nbsp; | &nbsp;
      <NavLink exact activeStyle={{backgroundColor: 'yellow'}} to="/nominations/new">New Nominations</NavLink>
      &nbsp; | &nbsp; */}
      <span>Hey {user.name}!</span>
      &nbsp;&nbsp;
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}