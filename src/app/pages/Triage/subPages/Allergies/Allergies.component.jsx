// Import: Packages
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./Allergies.elements";

// Import: Components
import { Text } from "../../../../components";

// SubPage: Allergies
export default function Allergies() {
  return (
    <>
      <Container data-testid={"allergies"}>
        <Wrapper>
          <Text heading as="h2">
            Allergies
          </Text>
        </Wrapper>
      </Container>
    </>
  );
}
