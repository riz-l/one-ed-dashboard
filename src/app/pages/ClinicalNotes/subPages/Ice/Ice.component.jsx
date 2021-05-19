// Import: Packages
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./Ice.elements";

// Import: Components
import { Text } from "../../../../components";

// SubPage: Ice
export default function Ice() {
  return (
    <>
      <Container data-testid={"ice"}>
        <Wrapper>
          <Text as="h2" heading>
            ICE
          </Text>
        </Wrapper>
      </Container>
    </>
  );
}
