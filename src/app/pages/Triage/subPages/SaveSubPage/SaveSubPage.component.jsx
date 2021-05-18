// Import: Packages
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./SaveSubPage.elements";

// Import: Components
import { Text } from "../../../../components";

// SubPage: SaveSubPage
export default function SaveSubPage() {
  return (
    <>
      <Container data-testid={"saveSubPage"}>
        <Wrapper>
          <Text as="h2" heading>
            Save
          </Text>
        </Wrapper>
      </Container>
    </>
  );
}
