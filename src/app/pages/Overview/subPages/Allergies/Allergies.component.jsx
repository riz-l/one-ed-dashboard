// Import: Packages
import React from "react";
import { useSelector } from "react-redux";

// Import: Elements
import { Container, Wrapper } from "./Allergies.elements";

// Import: Components
import { ReportEntry, Text } from "../../../../components";

// SubPage: Allergies
export default function Allergies() {
  // Redux: Extracts patientAllergies from the global state
  const patientAllergies = useSelector(
    (state) => state.selectedPatient.patientAllergies
  );

  // Maps patientAllergies through Allergies
  const allergiesRender = patientAllergies.map(
    ({
      id,
      allergyName,
      clinicalStatus,
      manifestationDisplay,
      ...otherPatientProps
    }) => (
      <ReportEntry
        key={id}
        allergies
        details={manifestationDisplay}
        status={clinicalStatus}
        type={allergyName}
        // {...otherPatientProps}
      />
    )
  );

  return (
    <>
      <Container data-testid={"allergies"}>
        <Wrapper>
          <Text as="h2" heading>
            Allergies
          </Text>

          {allergiesRender}
        </Wrapper>
      </Container>
    </>
  );
}
