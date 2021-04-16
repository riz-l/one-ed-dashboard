// Import: Packages
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./Alerts.elements";

// Import: Components
import { ReportEntry, Text } from "../../../../components";

// SubPage: Alerts
export default function Alerts() {
  return (
    <>
      <Container data-testid={"alerts"}>
        <Wrapper>
          <Text as="h2" heading>
            Alerts
          </Text>

          <ReportEntry
            alerts
            type="Impairment"
            details="Communication difficulties"
            status="Active"
          />

          <ReportEntry
            alerts
            type="End of Life"
            details="Advance decision in effect"
            status="Active"
          />
        </Wrapper>
      </Container>
    </>
  );
}
