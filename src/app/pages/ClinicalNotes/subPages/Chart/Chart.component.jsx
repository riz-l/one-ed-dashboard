// Import: Packages
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./Chart.elements";

// Import: Components
import { Text } from "../../../../components";

// SubPage: Chart
export default function Chart() {
  return (
    <>
      <Container data-testid={"chart"}>
        <Wrapper>
          <Text as="h2" heading>
            Chart
          </Text>
        </Wrapper>
      </Container>
    </>
  );
}
