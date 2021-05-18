// Import: Packages
import React from "react";
import { useSelector } from "react-redux";

// Import: Elements
import { Container, Wrapper } from "./SeenSubPage.elements";

// Import: Components
import { Grid, Form, MoveLocation } from "../../../../components";

// SubPage: SeenSubPage

export default function SeenSubPage() {
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
      <Container data-testid={"seenSubPage"}>
        <Wrapper>
          <Grid>
            <Grid.Column>
              <Grid.Item>
                <Form.Display htmlFor="seenBy" labelText="Seen By" subheading>
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
                <Form.TextArea
                  cols="90"
                  htmlFor="comments"
                  labelText="Comments"
                  rows="4"
                />
              </Grid.Item>
            </Grid.Column>
          </Grid>
        </Wrapper>
      </Container>
    </>
  );
}
