import { Route, Switch } from "react-router-dom";
import { Profile } from "./Profile";
import { Feed } from "./Feed";
import { NavBar } from "./NavBar";
import { SignUp } from "./SignUp";
import { Login } from "./Login";
import { NewRecipe } from "./NewRecipe";


function App() {
  return (
    <>
      <Switch>
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/feed" component={Feed} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/sign-in" component={Login} />
        <Route exact path="/new-recipe" component={NewRecipe} />
      </Switch>
      <NavBar />
    </>
  );
}

export default App;
