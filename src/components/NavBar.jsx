import { useHistory, Link } from "react-router-dom";
import { Nav, NavLink } from "../styles/NavBar";

export function NavBar(props) {
  const history = useHistory();

  function Logout(e) {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("instructor");
    history.push("/")
  }
  

  // nav bar component
    return (
      <>
        <Nav>
          <NavLink to="/feed">The Feed</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/new-recipe">Create Recipe</NavLink>
          <NavLink to="/sign-in">Login</NavLink>
          <NavLink to="/sign-up">Sign Up</NavLink>
          <NavLink to="/" onClick={Logout}>
          Logout
        </NavLink>
        </Nav>
      </>
    )
}