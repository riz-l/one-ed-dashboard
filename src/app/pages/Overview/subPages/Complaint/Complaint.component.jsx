// Import: Packages
import React from "react";
import { useSelector } from "react-redux";

// Import: Elements
import { Container, Wrapper } from "./Complaint.elements";

// Import: Components
import { Display, Grid, ReportEntry, Text } from "../../../../components";

// SubPage: Complaint
export default function Complaint() {
  // Redux: Extracts patientConditions from the global state
  const patientConditions = useSelector(
    (state) => state.selectedPatient.patientConditions
  );

  // Maps patientConditions where category === "Complaint"
  const complaintRender =
    patientConditions && patientConditions.length > 0
      ? patientConditions
          .filter((item) => item.category === "Complaint")
          .map(({ id, problemName, status, note, ...otherPatientProps }) => (
            <ReportEntry
              key={id}
              complaint
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
        <Container data-testid={"complaint"}>
          <Wrapper>
            <Text as="h2" heading>
              Complaint
            </Text>

            <Grid>
              <Grid.Item>
                <Display>This Patient has no historic complaints</Display>
              </Grid.Item>
            </Grid>
          </Wrapper>
        </Container>
      </>
    );
  }

  return (
    <>
      <Container data-testid={"complaint"}>
        <Wrapper>
          <Text as="h2" heading>
            Complaint
          </Text>

          {patientConditions &&
          patientConditions.length > 0 &&
          patientConditions.includes({ category: "Complaint" }) ? (
            complaintRender
          ) : (
            <Text as="p">The Patient has no historic complaints</Text>
          )}
        </Wrapper>
      </Container>
    </>
  );
}
