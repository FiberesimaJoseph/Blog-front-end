import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import AppBar from "./components/AppBar";
import Navigation from "./components/Navigation";
import General from "./pages/General";

const NavRoute = ({ exact, path, component }) => {
  return (
    <div>
      <header>
        <AppBar />
        <Navigation />
      </header>
      <Route exact={exact} path={path} component={component} />
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <NavRoute exact path="/" component={General} />
        <Route exact path="/login" component={Login} />
        <NavRoute exact path="/general" component={General} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
