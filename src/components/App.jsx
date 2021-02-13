import { Route, Switch } from "react-router-dom";
import { Profile } from "./Profile";
import { Feed } from "./Feed";
import { NavBar } from "./NavBar";
import { SignUp } from "./SignUp";
import { Login } from "./Login";


function App() {
  return (
    <>
      <Switch>
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/feed" component={Feed} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/login" component={Login} />
      </Switch>
      <NavBar />
    </>
  );
}

export default App;
