// Import: Packages
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./Diagnosis.elements";

// Import: Components
import { ReportEntry, Text } from "../../../../components";

// SubPage: Diagnosis
export default function Diagnosis() {
  return (
    <>
      <Container data-testid={"diagnosis"}>
        <Wrapper>
          <Text as="h2" heading>
            Diagnosis
          </Text>

          <ReportEntry
            diagnosis
            type="Impairment"
            details="Communication difficulties"
            status="Active"
          />
        </Wrapper>
      </Container>
    </>
  );
}
