// Import: Packages
import React from "react";
import { useSelector } from "react-redux";

// Import: Elements
import { Container, Wrapper } from "./Findings.elements";

// Import: Components
import { Display, Grid, ReportEntry, Text } from "../../../../components";

// SubPage: Findings
export default function Findings() {
  // Redux: Extracts patientConditions from the global state
  const patientConditions = useSelector(
    (state) => state.selectedPatient.patientConditions
  );

  // Maps patientConditions where category === "Findings"
  const findingsRender =
    patientConditions && patientConditions.length > 0
      ? patientConditions
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
          ))
      : null;

  if (!patientConditions || patientConditions.length < 0) {
    return (
      <>
        <Container data-testid={"findings"}>
          <Wrapper>
            <Text as="h2" heading>
              Findings
            </Text>

            <Grid>
              <Grid.Item>
                <Display>This Patient has no historic findings</Display>
              </Grid.Item>
            </Grid>
          </Wrapper>
        </Container>
      </>
    );
  }

  return (
    <>
      <Container data-testid={"findings"}>
        <Wrapper>
          <Text as="h2" heading>
            Findings
          </Text>

          {patientConditions && patientConditions.length > 0 ? (
            findingsRender
          ) : (
            <Text as="p">The Patient has no historic findings</Text>
          )}
        </Wrapper>
      </Container>
    </>
  );
}
