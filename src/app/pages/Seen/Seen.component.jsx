// Import: Packages
import React from "react";
import { useSelector } from "react-redux";

// Import: Elements
import { Container, ContentWrapper, Wrapper } from "./Seen.elements";

// Import: Components
import {
  Form,
  Grid,
  MoveLocation,
  PageTitle,
  PatientDemographics,
} from "../../components";

// Page: Seen
export default function Seen() {
  // Redux: Fetches CareProvider and location from the global state
  const user = useSelector(
    (state) =>
      state.userDetails.details.ControlActEvent.Subject.Value[0]
        .UserRoleProfile[0].UserID.identifierName
  );

  const area = useSelector(
    (state) => state.selectedPatient.patientData[0].location
  );

  return (
    <>
      <Container data-testid={"seen"}>
        <Wrapper>
          <PageTitle
            heading="Seen"
            subheading="Clinician records seeing the patient"
          />

          <PatientDemographics />

          <ContentWrapper>
            <Grid>
              <Grid.Column>
                <Grid.Item>
                  <Form.Display
                    htmlFor="seenBy"
                    labelText="Seen By"
                    left={false}
                    subheading
                  >
                    <p>{user}</p>
                  </Form.Display>
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="seenDate"
                    labelText="Seen Date"
                    type="Date"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="seenTime"
                    labelText="Seen Time"
                    type="Time"
                  />
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="seniorReview"
                    labelText="Senior Review"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown htmlFor="reason" labelText="Reason" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Display htmlFor="area" labelText="Area">
                    {/* TODO should be something like ED Waiting room, see if there is a more approprite piece of date to use here. */}
                    {area}
                  </Form.Display>
                </Grid.Item>

                <Grid.Item>
                  <MoveLocation />
                </Grid.Item>
              </Grid.Column>
            </Grid>

            <Grid>
              <Grid.Column>
                <Grid.Item>
                  <Form.TextArea htmlFor="comments" labelText="Comments" />
                </Grid.Item>
              </Grid.Column>
            </Grid>
          </ContentWrapper>
        </Wrapper>
      </Container>
    </>
  );
}
