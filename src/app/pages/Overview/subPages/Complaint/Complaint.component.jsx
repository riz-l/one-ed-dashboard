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
          .filter((item) => item.category === "Presenting complaints")
          .map(
            ({
              category,
              id,
              problemName,
              status,
              note,
              verificationStatus,
              problemCode,
              onsetDateTime,
              ...otherPatientProps
            }) => (
              <ReportEntry
                key={id}
                complaint
                details={note !== "undefined" ? note : "No further detail"}
                status={status}
                type={problemName}
                {...otherPatientProps}
                openedModal={
                  <>
                    <Grid>
                      <Grid.Column>
                        <Grid.Item>
                          <Display htmlFor="category" labelText="Category">
                            {category}
                          </Display>
                        </Grid.Item>

                        <Grid.Item>
                          <Display
                            hrmlFor="problemCode"
                            labelText="Problem code"
                          >
                            {problemCode}
                          </Display>
                        </Grid.Item>
                      </Grid.Column>

                      <Grid.Column>
                        <Grid.Item>
                          <Display
                            htmlFor="verificationStatus"
                            labelText="Verification Status"
                          >
                            {verificationStatus}
                          </Display>
                        </Grid.Item>

                        <Grid.Item>
                          <Display
                            htmlFor="onsetDateTime"
                            labelText="Onset Date Time"
                          >
                            {onsetDateTime}
                          </Display>
                        </Grid.Item>
                      </Grid.Column>
                    </Grid>
                  </>
                }
              />
            )
          )
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
          patientConditions.find(
            ({ category }) => category === "Presenting complaints"
          ) ? (
            complaintRender
          ) : (
            <Text as="p">The Patient has no historic complaints</Text>
          )}
        </Wrapper>
      </Container>
    </>
  );
}
