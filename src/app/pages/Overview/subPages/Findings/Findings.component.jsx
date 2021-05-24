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
                findings
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

          {patientConditions &&
          patientConditions.length > 0 &&
          patientConditions.find(({ category }) => category === "Findings") ? (
            findingsRender
          ) : (
            <Text as="p">The Patient has no historic findings</Text>
          )}
        </Wrapper>
      </Container>
    </>
  );
}
