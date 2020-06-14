import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import AppBar from "./components/AppBar";
import Navigation from "./components/Navigation";
import General from "./pages/General";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Developers from "./pages/Developers";
import Admin from "./pages/Admin";

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
        <Route exact path="/register" component={Signup} />
        <NavRoute exact path="/general" component={General} />
        <NavRoute exact path="/about-us" component={About}></NavRoute>
        <NavRoute exact path="/developers" component={Developers}></NavRoute>
        <Route path="/admin" component={Admin} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
