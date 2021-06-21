// Import: Packages
import React from "react";
import { useSelector } from "react-redux";

// Import: Utils
import { capitalizeFirstLetter } from "../../../../../utils/capitalizeFirstLetter";

// Import: Elements
import { Container, Wrapper } from "./Allergies.elements";

// Import: Components
import {
  AddAllergy,
  Display,
  Grid,
  ReportEntry,
  Text,
} from "../../../../components";

// SubPage: Allergies
export default function Allergies() {
  // Redux: useSelector
  const patientAllergies = useSelector((state) => {
    if (state.selectedPatient.patientAllergies) {
      return state.selectedPatient.patientAllergies;
    }
  });

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
          }) => (
            <ReportEntry
              allergies
              details={manifestationDisplay}
              key={id}
              openedModal={
                <>
                  <Grid>
                    <Grid.Column>
                      <Grid.Item>
                        <Display labelText="Allergy" htmlFor="allergyName">
                          {allergyName && allergyName.length > 0
                            ? allergyName === "undefined"
                              ? "N/A"
                              : allergyName
                              ? capitalizeFirstLetter(allergyName)
                              : "N/A"
                            : "N/A"}
                        </Display>
                      </Grid.Item>

                      <Grid.Item>
                        <Display
                          labelText="Manifestation Display"
                          htmlFor="manifestationDisplay"
                        >
                          {manifestationDisplay &&
                          manifestationDisplay.length > 0
                            ? manifestationDisplay === "undefined"
                              ? "N/A"
                              : manifestationDisplay
                              ? capitalizeFirstLetter(manifestationDisplay)
                              : "N/A"
                            : "N/A"}
                        </Display>
                      </Grid.Item>
                    </Grid.Column>

                    <Grid.Column>
                      <Grid.Item>
                        <Display
                          labelText="Reaction Display"
                          htmlFor="reactionDisplay"
                        >
                          {reactionDisplay && reactionDisplay.length > 0
                            ? reactionDisplay === "undefined"
                              ? "N/A"
                              : reactionDisplay
                              ? capitalizeFirstLetter(reactionDisplay)
                              : "N/A"
                            : "N/A"}
                        </Display>
                      </Grid.Item>
                    </Grid.Column>

                    <Grid.Column>
                      <Grid.Item>
                        <Display
                          labelText="Verification Status"
                          htmlFor="verificationStatus"
                        >
                          {verificationStatus && verificationStatus.length > 0
                            ? verificationStatus === "undefined"
                              ? "N/A"
                              : verificationStatus
                              ? capitalizeFirstLetter(verificationStatus)
                              : "N/A"
                            : "N/A"}
                        </Display>
                      </Grid.Item>
                    </Grid.Column>
                  </Grid>
                </>
              }
              status={clinicalStatus}
              type={allergyName}
            />
          )
        )
      : null;

  if (!patientAllergies || patientAllergies.length < 0) {
    return (
      <>
        <Container data-testid={"allergies"}>
          <Wrapper>
            <div style={{ display: "flex", flexDirection: "horizontal" }}>
              <Text as="h2" heading>
                Allergies
              </Text>
              <AddAllergy />
            </div>
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
          <div style={{ display: "flex", flexDirection: "horizontal" }}>
            <Text as="h2" heading>
              Allergies
            </Text>
            <AddAllergy />
          </div>
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
