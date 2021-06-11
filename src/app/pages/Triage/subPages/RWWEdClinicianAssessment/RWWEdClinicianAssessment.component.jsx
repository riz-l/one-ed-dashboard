// Import: Packages
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./RWWEdClinicianAssessment.elements";

// Import: Components
import { Text } from "../../../../components";

// SubPage: RWWEdClinician Assessment
export default function RWWEdClinicianAssessment() {
  return (
    <Container data-testid={"rwwEdClinicianAssessment"}>
      <Wrapper>
        <Text as="h2" heading>
          Clinician Assessment
        </Text>
      </Wrapper>
    </Container>
  );
}
