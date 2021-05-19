// Import: Packages
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./GPConnect.elements";

// Import: Components
import { Text } from "../../../../components";

// SubPage: GPConnect
export default function GPConnect() {
  return (
    <>
      <Container data-testid={"gPConnect"}>
        <Wrapper>
          <Text as="h2" heading>
            GP Connect
          </Text>
        </Wrapper>
      </Container>
    </>
  );
}
