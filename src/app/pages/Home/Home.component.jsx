// Import: Packages
import React from "react";
import { Link } from "react-router-dom";

// Import: Elements
import { Container } from "./Home.elements";

// Component: Home
export default function Home() {
  return (
    <>
      <Container data-testid={"home"}>
        <h1>Home</h1>
        <Link to="/login">Login</Link>
      </Container>
    </>
  );
}
