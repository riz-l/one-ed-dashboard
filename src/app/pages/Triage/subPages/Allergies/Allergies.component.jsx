// Import: Packages
import React from "react";
import { useSelector } from "react-redux";

// Import: Elements
import { Container, Wrapper } from "./Allergies.elements";

// Import: Components
import { Display, Grid, ReportEntry, Text } from "../../../../components";

// SubPage: Allergies
export default function Allergies() {
  // Redux: Extracts patientAllergies from the global state
  const patientAllergies = useSelector(
    (state) => state.selectedPatient.patientAllergies
  );

  // Maps patientAllergies through Allergies
  const allergiesRender =
    patientAllergies && patientAllergies.length > 0
      ? patientAllergies.map(
          ({
            id,
            allergyName,
            clinicalStatus,
            manifestationDisplay,
            reactionDisplay,
            verificationStatus,
            ...otherPatientProps
          }) => (
            <ReportEntry
              key={id}
              allergies
              details={manifestationDisplay}
              status={clinicalStatus}
              type={allergyName}
              openedModal={
                <>
                  <Grid>
                    <Grid.Column>
                      <Grid.Item>
                        <Display
                          labelText="Reaction Display"
                          htmlFor="reactionDisplay"
                        >
                          {reactionDisplay}
                        </Display>
                      </Grid.Item>
                    </Grid.Column>

                    <Grid.Column>
                      <Grid.Item>
                        <Display
                          labelText="Verification Status"
                          htmlFor="verificationStatus"
                        >
                          {verificationStatus}
                        </Display>
                      </Grid.Item>
                    </Grid.Column>
                  </Grid>
                </>
              }
              //  {...otherPatientProps}
            />
          )
        )
      : null;

  if (!patientAllergies || patientAllergies.length < 0) {
    return (
      <>
        <Container data-testid={"allergies"}>
          <Wrapper>
            <Text as="h2" heading>
              Allergies
            </Text>

            <Grid>
              <Grid.Item>
                <Display>This Patient has no historic allergies</Display>
              </Grid.Item>
            </Grid>
          </Wrapper>
        </Container>
      </>
    );
  }

  return (
    <>
      <Container data-testid={"allergies"}>
        <Wrapper>
          <Text as="h2" heading>
            Allergies
          </Text>

          {patientAllergies && patientAllergies.length > 0 ? (
            allergiesRender
          ) : (
            <Text as="p">The Patient has no historic allergies</Text>
          )}
        </Wrapper>
      </Container>
    </>
  );
}
