import React, { Component } from "react";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./Login.css";

class Login extends Component {
  render() {
    return (
      <Form className="login-form">
        <h1>
          <span className="font-weight-bold">coba-coba</span>.com
        </h1>
        <h2>Welcome</h2>
        <FormGroup>
          <Label>Email</Label>
          <Input type="email" placeholder="Email"></Input>
        </FormGroup>
      </Form>
    );
  }
}

export default Login;
