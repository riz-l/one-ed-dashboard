// Import: Packages
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./Pacs.elements";

// Import: Components
import { Text } from "../../../../components";

// SubPage: Pacs
export default function Pacs() {
  return (
    <>
      <Container data-testid={"pacs"}>
        <Wrapper>
          <Text as="h2" heading>
            PACS
          </Text>
        </Wrapper>
      </Container>
    </>
  );
}
