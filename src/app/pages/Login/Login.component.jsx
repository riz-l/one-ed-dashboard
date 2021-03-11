// Import: Packages
import React from "react";
import { Link } from "react-router-dom";

// Import: Elements
import { Container } from "./Login.elements";

// Component: Login
export default function Login(props) {
  return (
    <>
      <Container data-testid={"login"}>
        <h1>Login</h1>
        <p>
          <Link to="/one-ed/ward/dashboard">View Dashboard</Link>
        </p>
        <p>Logged in status: {props.isLoggedIn}</p>
        <button onClick={props.handleLogin}>Log In</button>
      </Container>
    </>
  );
}
