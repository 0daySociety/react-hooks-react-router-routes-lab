import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return (
    <Switch>


      <Route path="/movies">
        <Movies />
       
      </Route>
      <Route path="/actors">
        <Actors />
      </Route>
      <Route path="/directors">
        <Directors />
      </Route>
      <Route path="/">
       <Home />
      </Route>

    </Switch>
  );
}

export default App;
