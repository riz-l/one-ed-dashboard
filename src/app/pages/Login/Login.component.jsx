// Import: Packages
import React from "react";
import { Link } from "react-router-dom";

// Import: Elements
import { Container, Wrapper } from "./Login.elements";

// Import: Components
import { Button } from "../../components";

// Component: Login
export default function Login(props) {
  return (
    <>
      <Container data-testid={"login"}>
        <Wrapper>
          <h1>Login</h1>
          <p>
            <Link to="/one-ed/ward/dashboard">View Dashboard</Link>
          </p>
          <p>Logged in status: {props.isLoggedIn}</p>

          <Button onClick={props.handleLogin} text="Login" />
        </Wrapper>
      </Container>
    </>
  );
}
