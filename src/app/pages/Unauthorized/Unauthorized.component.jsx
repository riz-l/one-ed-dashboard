// Import: Packages
import React from "react";
import { Link } from "react-router-dom";

// Import: Elements
import { Container } from "./Unauthorized.elements";

// Page: Unauthorized
export default function Unauthorized() {
  return (
    <>
      <Container data-testid={"unauthorized"}>
        <h1>403: Unauthorized</h1>
        <p>Please login before attempting to access this page.</p>

        <p>
          <Link to="/">Return to Home</Link>
        </p>
      </Container>
    </>
  );
}
