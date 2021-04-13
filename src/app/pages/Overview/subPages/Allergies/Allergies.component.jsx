// Import: Packages
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./Allergies.elements";

// Import: Components
import { ReportEntry, Text } from "../../../../components";

// SubPage: Allergies
export default function Allergies() {
  return (
    <>
      <Container data-testid={"allergies"}>
        <Wrapper>
          <Text as="h2" heading>
            Allergies
          </Text>

          <ReportEntry
            allergies
            type="Impairment"
            details="Communication difficulties"
            status="Active"
          />
        </Wrapper>
      </Container>
    </>
  );
}
