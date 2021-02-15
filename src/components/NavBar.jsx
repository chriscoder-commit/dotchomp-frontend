import { useHistory, Link } from "react-router-dom";
import { Nav, NavLink } from "../styles/NavBar";

export function NavBar(props) {
  const history = useHistory();
  const moderator = localStorage.getItem("moderator");

  function Logout(e) {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("moderator");
    history.push("/sign-in")
  }
  // test new nav bar
  if (!props.auth) {
    return (
      <>
        <Nav>
          <NavLink to="/feed">The Feed</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/update-profile">Update Profile</NavLink>
          <NavLink to="/new-recipe">Create Recipe</NavLink>
          {moderator && <NavLink to="/secrets">Secrets</NavLink>}
          <NavLink to="/" onClick={Logout}>
            Logout
          </NavLink>
        </Nav>
        {props.children}
      </>
    );
  } else {
    return (
      <Nav>
        <NavLink to="/feed">The Feed</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/update-profile">Update Profile</NavLink>
        <NavLink to="/new-recipe">Create Recipe</NavLink>
        <NavLink to="/schedule">Timetable</NavLink>
        {props.isModerator && (
          <>
            <NavLink to="/secrets">Secrets</NavLink>
          </>
        )}
        <NavLink to="/" onClick={Logout}>
          Logout
        </NavLink>
      </Nav>
    );
  }
}


//   // nav bar component
//     return (
//       <>
//         <Nav>
//           <NavLink to="/feed">The Feed</NavLink>
//           <NavLink to="/profile">Profile</NavLink>
//           <NavLink to="/update-profile">Update Profile</NavLink>
//           <NavLink to="/new-recipe">Create Recipe</NavLink>
//           <NavLink to="/secrets">Secrets</NavLink>
//           <NavLink to="/sign-in">Login</NavLink>
//           <NavLink to="/sign-up">Sign Up</NavLink>
//           <NavLink to="/" onClick={Logout}>
//           Logout
//         </NavLink>
//         </Nav>
//       </>
//     )
// }