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
            type="Food Allergy"
            details="Peanuts"
            status="Active"/>

          <ReportEntry
          allergies
            type="Drug Allergy"
            details="Penicillin"
            status="Active"/>

        </Wrapper>
      </Container>
    </>
  );
}
