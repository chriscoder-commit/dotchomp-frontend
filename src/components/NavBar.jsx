import { useHistory, Link } from "react-router-dom";

export function NavBar(props) {
  const history = useHistory();

  function Logout(e) {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("instructor");
    history.push("/")
  }
  
    return (
      <>
        <nav>
          <Link to="/feed">The Feed</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/login">Login</Link>
          <Link to="/sign-up">Sign Up</Link>
        </nav>
      </>
    )
}