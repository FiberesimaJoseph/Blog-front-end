import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./Login.css";
import authService from "../../services/authService";
import { useHistory } from "react-router-dom";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    authService.login({ username, password }).then((data) => {
      localStorage.setItem(
        "login",
        JSON.stringify({
          token: `Bearer ${data.token}`,
          user: data.user,
        })
      );
      console.log(data);
      history.push("/admin/posts");
    });
  };

  return (
    <div className="form_container">
      <h1>Admin Login</h1>
      <div className="form-block">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="username"
              placeholder="Enter Username"
              autoComplete="username"
              onChange={handleUsernameChange}
            />
            <Form.Text className="text-muted">
              This is administarative login
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              onChange={handlePasswordChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AdminLogin;
