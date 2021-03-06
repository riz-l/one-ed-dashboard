// Import: Packages
import React from "react";
import { useSelector } from "react-redux";

// Import: Utils
import { capitalizeFirstLetter } from "../../../../../utils/capitalizeFirstLetter";

// Import: Elements
import { Container, Wrapper } from "./Findings.elements";

// Import: Components
import { Display, Grid, ReportEntry, Text } from "../../../../components";

// SubPage: Findings
export default function Findings() {
  // Redux: useSelelctor
  const patientConditions = useSelector((state) => {
    if (state.selectedPatient.patientConditions) {
      return state.selectedPatient.patientConditions;
    }
  });

  // Maps patientConditions where category === "Findings"
  const findingsRender =
    patientConditions && patientConditions.length > 0
      ? patientConditions
          .filter((item) => item.category === "Findings")
          .map(
            ({
              category,
              id,
              note,
              onsetDateTime,
              problemCode,
              problemName,
              status,
              verificationStatus,
              ...otherPatientProps
            }) => (
              <ReportEntry
                details={note !== "undefined" ? note : "No further detail"}
                findings
                key={id}
                openedModal={
                  <>
                    <Grid>
                      <Grid.Column>
                        <Grid.Item>
                          <Display htmlFor="problemName" labelText="Problem">
                            {problemName && problemName.length > 0
                              ? problemName === "undefined"
                                ? "N/A"
                                : problemName
                                ? capitalizeFirstLetter(problemName)
                                : "N/A"
                              : "N/A"}
                          </Display>
                        </Grid.Item>

                        <Grid.Item>
                          <Display htmlFor="note" labelText="Note">
                            {note && note.length > 0
                              ? note === "undefined"
                                ? "N/A"
                                : note
                                ? capitalizeFirstLetter(note)
                                : "N/A"
                              : "N/A"}
                          </Display>
                        </Grid.Item>
                      </Grid.Column>

                      <Grid.Column>
                        <Grid.Item>
                          <Display htmlFor="category" labelText="Category">
                            {category && category.length > 0
                              ? category === "undefined"
                                ? "N/A"
                                : category
                                ? capitalizeFirstLetter(category)
                                : "N/A"
                              : "N/A"}
                          </Display>
                        </Grid.Item>

                        <Grid.Item>
                          <Display
                            hrmlFor="problemCode"
                            labelText="Problem code"
                          >
                            {problemCode && problemCode.length > 0
                              ? problemCode === "undefined"
                                ? "N/A"
                                : problemCode
                                ? problemCode
                                : "N/A"
                              : "N/A"}
                          </Display>
                        </Grid.Item>
                      </Grid.Column>

                      <Grid.Column>
                        <Grid.Item>
                          <Display
                            htmlFor="verificationStatus"
                            labelText="Verification Status"
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

                        <Grid.Item>
                          <Display
                            htmlFor="onsetDateTime"
                            labelText="Onset Date Time"
                          >
                            {onsetDateTime && onsetDateTime.length > 0
                              ? onsetDateTime === "undefined"
                                ? "N/A"
                                : onsetDateTime
                                ? onsetDateTime
                                : "N/A"
                              : "N/A"}
                          </Display>
                        </Grid.Item>
                      </Grid.Column>
                    </Grid>
                  </>
                }
                status={status}
                type={problemName}
                {...otherPatientProps}
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
