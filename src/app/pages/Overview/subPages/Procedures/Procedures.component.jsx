// Import: Packages
import React from "react";
import { useSelector } from "react-redux";

// Import: Elements
import { Container, Wrapper } from "./Procedures.elements";

// Import: Components
import { Display, Grid, ReportEntry, Text } from "../../../../components";

// SubPage: Procedures
export default function Procedures() {
  // Redux: Extracts patientConditions from the global state
  const patientConditions = useSelector(
    (state) => state.selectedPatient.patientConditions
  );

  // Maps patientConditions where category === "Procedures"
  const proceduresRender =
    patientConditions && patientConditions.length > 0
      ? patientConditions
          .filter((item) => item.category === "Procedures")
          .map(({ id, problemName, status, note, ...otherPatientProps }) => (
            <ReportEntry
              key={id}
              procedures
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
        <Container data-testid={"procedures"}>
          <Wrapper>
            <Text as="h2" heading>
              Procedures
            </Text>

            <Grid>
              <Grid.Item>
                <Display>This Patient has no historic procedures</Display>
              </Grid.Item>
            </Grid>
          </Wrapper>
        </Container>
      </>
    );
  }

  return (
    <>
      <Container data-testid={"procedures"}>
        <Wrapper>
          <Text as="h2" heading>
            Procedures
          </Text>

          {patientConditions &&
          patientConditions.length > 0 &&
          patientConditions.includes({ category: "Procedures" }) ? (
            proceduresRender
          ) : (
            <Text as="p">The Patient has no historic procedures</Text>
          )}
        </Wrapper>
      </Container>
    </>
  );
}
