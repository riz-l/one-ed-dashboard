// Import: Packages
import React from "react";
import { useSelector } from "react-redux";

// Import: Elements
import { Container, Wrapper } from "./TriageAndStream.elements";

// Import: Components
import { Form, Grid, Text } from "../../../../components";

// SubPage: TriageAndStream
export default function TriageAndStream() {
  // Redux: Extracts currently logged in user from global state
  const user = useSelector(
    (state) =>
      state.userDetails.details.ControlActEvent.Subject.Value[0]
        .UserRoleProfile[0].UserID.identifierName
  );

  // Current Date, Time
  const date = new Date();
  const formattedDate = date.toISOString().substr(0, 10);
  console.log("FORMATTED DATE: ", formattedDate);

  return (
    <>
      <Container data-testid={"triageAndStream"}>
        <Wrapper>
          <Text heading as="h2">
            Triage
          </Text>

          <Form>
            <Grid>
              <Grid.Column>
                <Grid.Item>
                  <Form.Display htmlFor="test" labelText="Test">
                    Test
                  </Form.Display>
                </Grid.Item>

                <Grid.Item>
                  <Form.Display
                    htmlFor="Arrival Date/Time"
                    labelText="Arrival Date/Time"
                  >
                    (Encounter date)
                  </Form.Display>
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="Triage Date"
                    labelText="Triage Date"
                    type="date"
                    value={formattedDate}
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="Triage Time"
                    labelText="Triage Time"
                    type="text"
                    placeholder="Current time"
                  />
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
                <Grid.Item>
                  <Form.Input
                    htmlFor="Location"
                    labelText="Location"
                    type="text"
                    placeholder="Encounter location"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.AutoSuggest
                    htmlFor="Chief Complaint"
                    labelText="Chief Complaint"
                    placeholder="Chief Complaint..."
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="Triage Category"
                    labelText="Triage Category"
                  />
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
                <Grid.Item>
                  <Form.Display htmlFor="Triage By" labelText="Triage By">
                    {user}
                  </Form.Display>
                </Grid.Item>
              </Grid.Column>
            </Grid>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
}
