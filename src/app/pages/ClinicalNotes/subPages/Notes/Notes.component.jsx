// Import: Packages
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./Notes.elements";

// Import: Components
import { Text } from "../../../../components";

// SubPage: Notes
export default function Notes() {
  return (
    <>
      <Container data-testid={"notes"}>
        <Wrapper>
          <Text as="h2" heading>
            Notes
          </Text>
        </Wrapper>
      </Container>
    </>
  );
}
