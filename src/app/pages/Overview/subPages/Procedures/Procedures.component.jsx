// Import: Packages
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./Procedures.elements";

// Import: Components
import { ReportEntry, Text } from "../../../../components";

// SubPage: Procedures
export default function Procedures() {
  return (
    <>
      <Container data-testid={"procedures"}>
        <Wrapper>
          <Text as="h2" heading>
            Procedures
          </Text>

          <ReportEntry
            procedures
            type="Impairment"
            details="Communication difficulties"
            status="Active"
          />
        </Wrapper>
      </Container>
    </>
  );
}
