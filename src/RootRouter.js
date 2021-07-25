import React from "react";
import { BrowseRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Container/Dashboard/Dashboard";
const mainRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Dashboard} />
      </Switch>
    </Router>
  );
};
export default mainRoutes;
