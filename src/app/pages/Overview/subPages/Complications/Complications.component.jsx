// Import: Packages
import React from "react";
import { useSelector } from "react-redux";

// Import: Elements
import { Container, Wrapper } from "./Complications.elements";

// Import: Components
import { ReportEntry, Text } from "../../../../components";

// SubPage: Complications
export default function Complications() {
  // Redux: Extracts patientConditions from the global state
  const patientConditions = useSelector(
    (state) => state.selectedPatient.patientConditions
  );

  // Maps patientConditions where category === "Complications"
  const complicationsRender = patientConditions
    .filter((item) => item.category === "Complications")
    .map(({ id, problemName, status, note, ...otherPatientProps }) => (
      <ReportEntry
        key={id}
        complications
        details={note !== "undefined" ? note : "No further detail"}
        status={status}
        type={problemName}
        {...otherPatientProps}
      />
    ));

  return (
    <>
      <Container data-testid={"complications"}>
        <Wrapper>
          <Text as="h2" heading>
            Complications
          </Text>

          {complicationsRender}
        </Wrapper>
      </Container>
    </>
  );
}
