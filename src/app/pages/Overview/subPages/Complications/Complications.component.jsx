// Import: Packages
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./Complications.elements";

// Import: Components
import { ReportEntry, Text } from "../../../../components";

// SubPage: Complications
export default function Complications() {
  return (
    <>
      <Container data-testid={"complications"}>
        <Wrapper>
          <Text as="h2" heading>
            Complications
          </Text>

          <ReportEntry
            complications
            type="Impairment"
            details="Communication difficulties"
            status="Active"
          />
        </Wrapper>
      </Container>
    </>
  );
}
