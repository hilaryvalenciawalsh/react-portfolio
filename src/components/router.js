import React from "react";
import { Switch, Route } from "react-router-dom";

import About from "./about";
import Portfolio from "./portfolio";
import Contact from "./contact";

const Router = () => (
  <Switch>
    <Route path="/about" component={About} />{" "}
    <Route path="/portfolio" component={Portfolio} />{" "}
    <Route path="/contact" component={Contact} />
  </Switch>
);

export default Router;
