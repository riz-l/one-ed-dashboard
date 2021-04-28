// Import: Packages
import React from "react";
import { Link } from "react-router-dom";

// Import: Elements
import { Container, Wrapper } from "./Unauthorized.elements";

// Import: Components
import { Text } from "../../components";

// Page: Unauthorized
export default function Unauthorized() {
  return (
    <>
      <Container data-testid={"unauthorized"}>
        <Wrapper>
          <h1>403: Unauthorised</h1>
          <Text as="p" text>
            Please login before attempting to access this page.
          </Text>
          <Link to="/">Return to Home </Link>
        </Wrapper>
      </Container>
    </>
  );
}
