import { Route, Switch } from "react-router-dom";

import { Profile } from "./Profile";
import { Feed } from "./Feed";
import { NavBar } from "./NavBar";


function App() {
  return (
    <>
      <Switch>
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/feed" component={Feed} />
      </Switch>
      <NavBar />
    </>
  );
}

export default App;
