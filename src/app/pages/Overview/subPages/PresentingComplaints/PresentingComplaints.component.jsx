// Import: Packages
import React from "react";
import { useSelector } from "react-redux";

// Import: Utils
import { capitalizeFirstLetter } from "../../../../../utils/capitalizeFirstLetter";

// Import: Elements
import { Container, Wrapper } from "./PresentingComplaints.elements";

// Import: Components
import { Display, Grid, ReportEntry, Text } from "../../../../components";

// SubPage: Complaint
export default function PresentingComplaints() {
  // Redux: useSelector
  const patientConditions = useSelector((state) => {
    if (state.selectedPatient.patientConditions) {
      return state.selectedPatient.patientConditions;
    }
  });

  // Maps patientConditions where category === "Complaint"
  const complaintRender =
    patientConditions && patientConditions.length > 0
      ? patientConditions
          .filter((item) => item.category === "Presenting complaints")
          .map(
            ({
              category,
              id,
              note,
              problemCode,
              problemName,
              onsetDateTime,
              status,
              verificationStatus,
              ...otherPatientProps
            }) => (
              <ReportEntry
                complaint
                details={note !== "undefined" ? note : "No further detail"}
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
