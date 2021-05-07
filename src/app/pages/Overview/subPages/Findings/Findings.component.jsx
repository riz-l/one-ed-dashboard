// Import: Packages
import React from "react";
import { useSelector } from "react-redux";

// Import: Elements
import { Container, Wrapper } from "./Findings.elements";

// Import: Components
import { ReportEntry, Text } from "../../../../components";

// SubPage: Findings
export default function Findings() {
  // Redux: Extracts patientConditions from the global state
  const patientConditions = useSelector(
    (state) => state.selectedPatient.patientConditions
  );

  // Maps patientConditions where category === "Findings"
  const findingsRender = patientConditions
    .filter((item) => item.category === "Findings")
    .map(({ id, problemName, status, note, ...otherPatientProps }) => (
      <ReportEntry
        key={id}
        findings
        details={note !== "undefined" ? note : "No further detail"}
        status={status}
        type={problemName}
        {...otherPatientProps}
      />
    ));

  return (
    <>
      <Container data-testid={"findings"}>
        <Wrapper>
          <Text as="h2" heading>
            Findings
          </Text>

          {findingsRender}
        </Wrapper>
      </Container>
    </>
  );
}
