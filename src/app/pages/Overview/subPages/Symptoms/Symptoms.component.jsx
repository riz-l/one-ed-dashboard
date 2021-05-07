// Import: Packages
import React from "react";
import { useSelector } from "react-redux";

// Import: Elements
import { Container, Wrapper } from "./Symptoms.elements";

// Import: Components
import { Display, Grid, ReportEntry, Text } from "../../../../components";

// SubPage: Symptoms
export default function Symptoms() {
  // Redux: Extracts patientConditions from the global state
  const patientConditions = useSelector(
    (state) => state.selectedPatient.patientConditions
  );

  // Maps patientConditions where category === "Symptoms"
  const symptomsRender =
    patientConditions && patientConditions.length > 0
      ? patientConditions
          .filter((item) => item.category === "Symptoms")
          .map(({ id, problemName, status, note, ...otherPatientProps }) => (
            <ReportEntry
              key={id}
              symptoms
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
        <Container data-testid={"symptoms"}>
          <Wrapper>
            <Text as="h2" heading>
              Symptoms
            </Text>

            <Grid>
              <Grid.Item>
                <Display>This Patient has no historic symptoms</Display>
              </Grid.Item>
            </Grid>
          </Wrapper>
        </Container>
      </>
    );
  }

  return (
    <>
      <Container data-testid={"symptoms"}>
        <Wrapper>
          <Text as="h2" heading>
            Symptoms
          </Text>

          {patientConditions && patientConditions.length > 0 ? (
            symptomsRender
          ) : (
            <Text as="p">The Patient has no historic symptoms</Text>
          )}
        </Wrapper>
      </Container>
    </>
  );
}
