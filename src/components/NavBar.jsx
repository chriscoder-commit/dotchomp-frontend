import { useHistory, Link } from "react-router-dom";

export function NavBar(props) {
  const history = useHistory();

  function logout(e) {
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
        </nav>
      </>
    )
}