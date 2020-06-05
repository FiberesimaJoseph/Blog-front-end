import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { UserProvider } from "./context/userContext";
import Login from "./pages/Login";
import AppBar from "./components/AppBar";
import Navigation from "./components/Navigation";
import General from "./pages/General";
import Signup from "./pages/Signup";

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
  const [user, setUser] = useState({ username: "", token: "" });
  return (
    <BrowserRouter>
      <UserProvider value={(user, setUser)}>
        <Switch>
          <NavRoute exact path="/" component={General} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Signup} />
          <NavRoute exact path="/general" component={General} />
        </Switch>
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
