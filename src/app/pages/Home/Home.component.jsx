// Import: Packages
import React from "react";
import { Link } from "react-router-dom";

// Import: Elements
import { Container, Wrapper } from "./Home.elements";

// Page: Home
export default function Home() {
  return (
    <>
      <Container data-testid={"home"}>
        <Wrapper>
          <h1>Home</h1>
          <Link to="/login">Login</Link>
        </Wrapper>
      </Container>
    </>
  );
}
