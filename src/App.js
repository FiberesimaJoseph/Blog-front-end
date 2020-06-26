import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import AppBar from "./components/AppBar";
import Navigation from "./components/Navigation";
import General from "./pages/General";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Developers from "./pages/Developers";
import AboutBlog from "./components/AboutBlog";
import Africanstories from "./pages/AfricanStories";
import Contact from "./pages/Contact";
import Musics from "./pages/Musics";
import News from "./pages/News";
import Sports from "./pages/Sports";
import AdminLogin from "./admin/pages/login/AdminLogin";
import AdminPosts from "./admin/pages/posts/AdminPosts";
import AdminUsers from "./admin/pages/users/AdminUsers";
import userContext from "./context/userContext";
import ProtectedAdminRoutes from "./ProtectedAdminRoutes";

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
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  return (
    <BrowserRouter>
      <userContext.Provider value={{ userData, setUserData }}>
        <Switch>
          <NavRoute exact path="/" component={General} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Signup} />
          <NavRoute exact path="/african-stories" component={Africanstories} />
          <NavRoute exact path="/general" component={General} />
          <NavRoute exact path="/about-us" component={About} />
          <NavRoute exact path="/developers" component={Developers} />
          <NavRoute exact path="/about-blog" component={AboutBlog} />
          <NavRoute exact path="/contact-us" component={Contact} />
          <NavRoute exact path="/musics" component={Musics} />
          <NavRoute exact path="/news" component={News} />
          <NavRoute exact path="/sports" component={Sports} />
          <Route exact path="/admin/login" component={AdminLogin} />
          <ProtectedAdminRoutes
            exact
            path="/admin/posts"
            component={AdminPosts}
          />
          <ProtectedAdminRoutes
            exact
            path="/admin/users"
            component={AdminUsers}
          />
        </Switch>
      </userContext.Provider>
    </BrowserRouter>
  );
};

export default App;
