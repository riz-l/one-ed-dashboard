// Import: Packages
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./RWWEdNurseAssessment.elements";

// Import: Components
import { Text } from "../../../../components";

// SubPage: RWWEdNurse Assessment
export default function RWWEdNurseAssessment() {
  return (
    <Container data-testid={"rwwEdNurseAssessment"}>
      <Wrapper>
        <Text as="h2" heading>
          Nurse Assessment
        </Text>
      </Wrapper>
    </Container>
  );
}
