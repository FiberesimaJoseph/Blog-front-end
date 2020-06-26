import React, { useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import AdminAppBar from "./admin/components/AppBar";
import authService from "./admin/services/authService";

const ProtectedAdminRoutes = ({ component, path }) => {
  const history = useHistory();
  useEffect(() => {
    const checkLoggedIn = () => {
      let loginAuth = localStorage.getItem("login");
      if (loginAuth.token === null || loginAuth.token === undefined) {
        localStorage.setItem("login", JSON.stringify({ token: "" }));
      }
      const tokenRes = authService.verify(loginAuth.token);
      tokenRes.then((data) => {
        console.log(data);
        if (data.data) {
          console.log(path);

          history.push(path);
        }
        // history.push("/admin/login");
      });
    };
    checkLoggedIn();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <header>
        <AdminAppBar />
      </header>
      <Route exact path={path} component={component} />
    </div>
  );
};

export default ProtectedAdminRoutes;
