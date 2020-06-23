import React from "react";
import { Form, Button } from "react-bootstrap";
import "./Login.css";

const AdminLogin = () => {
  return (
    <div className="form_container">
      <h1>Admin Login</h1>
      <div className="form-block">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="username" placeholder="Enter Username" />
            <Form.Text className="text-muted">
              This is administarative login
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
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
