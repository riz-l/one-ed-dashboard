// Import: Packages
import React from "react";
import { useSelector } from "react-redux";

// Import: Elements
import { Container, Wrapper } from "./Diagnosis.elements";

// Import: Components
import { ReportEntry, Text } from "../../../../components";

// SubPage: Diagnosis
export default function Diagnosis() {
  // Redux: Extracts patientConditions from the global state
  const patientConditions = useSelector(
    (state) => state.selectedPatient.patientConditions
  );

  // Maps patientConditions where category === "Diagnosis"
  const diagnosisRender = patientConditions
    .filter((item) => item.category === "Diagnosis")
    .map(({ id, problemName, status, note, ...otherPatientProps }) => (
      <ReportEntry
        key={id}
        diagnosis
        details={note !== "undefined" ? note : "No further detail"}
        status={status}
        type={problemName}
        {...otherPatientProps}
      />
    ));

  return (
    <>
      <Container data-testid={"diagnosis"}>
        <Wrapper>
          <Text as="h2" heading>
            Diagnosis
          </Text>

          {diagnosisRender}
        </Wrapper>
      </Container>
    </>
  );
}
