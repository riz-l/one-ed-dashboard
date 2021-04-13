// Import: Packages
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./Findings.elements";

// Import: Components
import { ReportEntry, Text } from "../../../../components";

// SubPage: Findings
export default function Findings() {
  return (
    <>
      <Container data-testid={"findings"}>
        <Wrapper>
          <Text as="h2" heading>
            Findings
          </Text>

          <ReportEntry
            findings
            type="Impairment"
            details="Communication difficulties"
            status="Active"
          />
        </Wrapper>
      </Container>
    </>
  );
}
