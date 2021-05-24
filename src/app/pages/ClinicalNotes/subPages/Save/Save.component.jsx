// Import: Packages
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./Save.elements";

// Import: Components
import { Text } from "../../../../components";

// SubPage: Save
export default function Save() {
  return (
    <>
      <Container data-testid={"save"}>
        <Wrapper>
          <Text as="h2" heading>
            Save
          </Text>
        </Wrapper>
      </Container>
    </>
  );
}
