import { Route, Switch } from "react-router-dom";
import { Profile } from "./Profile";
import { ProtectedRoute } from "./ProtectedRoute";
import { Feed } from "./Feed";
import { NavBar } from "./NavBar";
import { SignUp } from "./SignUp";
import { Login } from "./Login";
import { NewRecipe } from "./NewRecipe";
import { UpdateProfile } from "./UpdateProfile";
import { Secrets } from "./Secrets";



function App() {
  return (
    <>
    <NavBar />
      <Switch>
        <ProtectedRoute exact path="/profile" component={Profile} />
        <ProtectedRoute exact path="/secrets" component={Secrets} />
        <ProtectedRoute exact path="/update-profile" component={UpdateProfile} />
        <ProtectedRoute exact path="/new-recipe" component={NewRecipe} />
        <Route exact path="/feed" component={Feed} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/sign-in" component={Login} />
        {/* logic for loggedout nav bar  */}
        <NavBar auth={false}>
          <Route exact path="/feed" component={Feed} />
        </NavBar>
      </Switch>
    </>
  );
}

export default App;
