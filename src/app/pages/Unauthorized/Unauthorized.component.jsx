// Import: Packages
import React from "react";

// Import: Elements
import { Container, ReturnButton, Wrapper } from "./Unauthorized.elements";

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

          <ReturnButton to="/">Return to Home</ReturnButton>
        </Wrapper>
      </Container>
    </>
  );
}
