// Import: Packages
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./Complaint.elements";

// Import: Components
import { ReportEntry, Text } from "../../../../components";

// SubPage: Complaint
export default function Complaint() {
  return (
    <>
      <Container data-testid={"complaint"}>
        <Wrapper>
          <Text as="h2" heading>
            Complaint
          </Text>

          <ReportEntry
            complaint
            type="Impairment"
            details="Communication difficulties"
            status="Active"
          />
        </Wrapper>
      </Container>
    </>
  );
}
