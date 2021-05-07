// Import: Packages
import React from "react";
import { useSelector } from "react-redux";

// Import: Elements
import { Container, Wrapper } from "./Diagnosis.elements";

// Import: Components
import { Display, Grid, ReportEntry, Text } from "../../../../components";

// SubPage: Diagnosis
export default function Diagnosis() {
  // Redux: Extracts patientConditions from the global state
  const patientConditions = useSelector(
    (state) => state.selectedPatient.patientConditions
  );

  // Maps patientConditions where category === "Diagnosis"
  const diagnosisRender =
    patientConditions && patientConditions.length > 0
      ? patientConditions
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
          ))
      : null;

  if (!patientConditions || patientConditions.length < 0) {
    return (
      <>
        <Container data-testid={"diagnosis"}>
          <Wrapper>
            <Text as="h2" heading>
              Diagnosis
            </Text>

            <Grid>
              <Grid.Item>
                <Display>This Patient has no historic diagnoses</Display>
              </Grid.Item>
            </Grid>
          </Wrapper>
        </Container>
      </>
    );
  }

  return (
    <>
      <Container data-testid={"diagnosis"}>
        <Wrapper>
          <Text as="h2" heading>
            Diagnosis
          </Text>

          {patientConditions && patientConditions.length > 0 ? (
            diagnosisRender
          ) : (
            <Text as="p">The Patient has no historic allergies</Text>
          )}
        </Wrapper>
      </Container>
    </>
  );
}
