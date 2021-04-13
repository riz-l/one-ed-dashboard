// Import: Packages
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./Alerts.elements";

// Import: Components
import { Text } from "../../../../components";

// SubPage: Alerts
export default function Alerts() {
  return (
    <>
      <Container data-testid={"alerts"}>
        <Wrapper>
          <Text heading as="h2">
            Alerts
          </Text>
        </Wrapper>
      </Container>
    </>
  );
}
