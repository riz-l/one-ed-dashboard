// Import: Packages
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./Symptoms.elements";

// Import: Components
import { ReportEntry, Text } from "../../../../components";

// SubPage: Symptoms
export default function Symptoms() {
  return (
    <>
      <Container data-testid={"symptoms"}>
        <Wrapper>
          <Text as="h2" heading>
            Symptoms
          </Text>

          <ReportEntry
            symptoms
            type="Impairment"
            details="Communication difficulties"
            status="Active"
          />
        </Wrapper>
      </Container>
    </>
  );
}
