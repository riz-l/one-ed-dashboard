// Import: Packages
import React from "react";
import { useSelector } from "react-redux";

// Import: Elements
import { Container, Wrapper } from "./Complications.elements";

// Import: Components
import { Display, Grid, ReportEntry, Text } from "../../../../components";

// SubPage: Complications
export default function Complications() {
  // Redux: Extracts patientConditions from the global state
  const patientConditions = useSelector(
    (state) => state.selectedPatient.patientConditions
  );

  // Maps patientConditions where category === "Complications"
  const complicationsRender =
    patientConditions && patientConditions.length > 0
      ? patientConditions
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
          ))
      : null;

  if (!patientConditions || patientConditions.length < 0) {
    return (
      <>
        <Container data-testid={"complications"}>
          <Wrapper>
            <Text as="h2" heading>
              Complications
            </Text>

            <Grid>
              <Grid.Item>
                <Display>This Patient has no historic complications</Display>
              </Grid.Item>
            </Grid>
          </Wrapper>
        </Container>
      </>
    );
  }

  return (
    <>
      <Container data-testid={"complications"}>
        <Wrapper>
          <Text as="h2" heading>
            Complications
          </Text>

          {patientConditions &&
          patientConditions.length > 0 &&
          patientConditions.includes({ category: "Complications" }) ? (
            complicationsRender
          ) : (
            <Text as="p">The Patient has no historic complications</Text>
          )}
        </Wrapper>
      </Container>
    </>
  );
}
