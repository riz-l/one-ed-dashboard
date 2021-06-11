// Import: Packages
import React from "react";
import { useSelector } from "react-redux";

// Import: Utils
import { capitalizeFirstLetter } from "../../../../../utils/capitalizeFirstLetter";

// Import: Elements
import { Container, Wrapper } from "./Diagnosis.elements";

// Import: Components
import { Display, Grid, ReportEntry, Text } from "../../../../components";

// SubPage: Diagnosis
export default function Diagnosis() {
  // Redux: useSelector
  const patientConditions = useSelector((state) => {
    if (state.selectedPatient.patientConditions) {
      return state.selectedPatient.patientConditions;
    }
  });

  // Maps patientConditions where category === "Diagnosis"
  const diagnosisRender =
    patientConditions && patientConditions.length > 0
      ? patientConditions
          .filter((item) => item.category === "Diagnosis")
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
                diagnosis
                key={id}
                openedModal={
                  <>
                    <Grid>
                      <Grid.Column>
                        <Grid.Item>
                          <Display labelText="Problem" htmlFor="problemName">
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
                          <Display labelText="Note" htmlFor="note">
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

                        <Grid.Item>
                          <Display labelText="Category" htmlFor="category">
                            {category && category.length > 0
                              ? category === "undefined"
                                ? "N/A"
                                : category
                                ? capitalizeFirstLetter(category)
                                : "N/A"
                              : "N/A"}
                          </Display>
                        </Grid.Item>
                      </Grid.Column>

                      <Grid.Column>
                        <Grid.Item>
                          <Display
                            labelText="problemCode"
                            htmlFor="problemCode"
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

                        <Grid.Item>
                          <Display
                            labelText="Onset Date Time"
                            htmlFor="onsetDateTime"
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
        <Container data-testid={"diagnosis"}>
          <Wrapper>
            <Text as="h2" heading>
              Diagnosis
            </Text>

            <Grid>
              <Grid.Item>
                <Display>This Patient has no historic diagnoses</Display>
              </Grid.Item>
            </Grid>
          </Wrapper>
        </Container>
      </>
    );
  }

  return (
    <>
      <Container data-testid={"diagnosis"}>
        <Wrapper>
          <Text as="h2" heading>
            Diagnosis
          </Text>

          {patientConditions &&
          patientConditions.length > 0 &&
          patientConditions.find(({ category }) => category === "Diagnosis") ? (
            diagnosisRender
          ) : (
            <Text as="p">The Patient has no historic diagnoses</Text>
          )}
        </Wrapper>
      </Container>
    </>
  );
}
