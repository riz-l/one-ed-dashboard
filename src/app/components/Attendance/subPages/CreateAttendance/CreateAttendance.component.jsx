// Import: Packages
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./CreateAttendance.elements";

// Import: Components
import { Form, Grid } from "../../../../components";

// SubPage: CreateAttendance
export default function CreateAttendance() {
  return (
    <>
      <Container data-testid={"createAttendance"}>
        <Wrapper>
          <Form>
            <Form.Text as="h2" heading>
              Create Attendance
            </Form.Text>

            <Grid>
              <Grid.Column>
                {/* Arrival Date needs to default to the current date */}
                <Grid.Item>
                  <Form.Input type="date" labelText="Arrival Date" />
                </Grid.Item>

                {/* Arrival Time needs to default to the current time. */}
                <Grid.Item>
                  <Form.Input type="time" labelText="Arrival Time" />
                </Grid.Item>
              </Grid.Column>
              <Grid.Column>
                <Grid.Item>
                  <Form.AutoSuggest labelText="Presenting Complaint" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown labelText="Attendance Type" />
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
                <Grid.Item>
                  <Form.AutoSuggest labelText="Responsible Care Provider" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown labelText="Attendance Source" />
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
                <Grid.Item>
                  <Form.Dropdown labelText="Assigned to" />
                </Grid.Item>
              </Grid.Column>
            </Grid>

            <Grid>
              <Grid.Column>
                <Grid.Item>
                  <Form.Text as="h3" subheading>
                    Incident
                  </Form.Text>
                  <Form.Checkbox name="Incident" text="Time elapsed" />
                  <Form.Checkbox name="Incident" text="Date and Time" />
                </Grid.Item>

                {/* Conditionally appears if Time Elapsed was selected */}
                <Grid.Item>
                  <Form.Dropdown labelText="Time Elapsed" />
                </Grid.Item>

                {/* Conditionally display the date and time fields if "Date and Time" was selected. */}
                <Grid.Item>
                  <Form.Input type="Date" labelText="Incident Date" />
                </Grid.Item>
                <Grid.Item>
                  <Form.Input type="Time" labelText="Incident Date" />
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
                <Grid.Item>
                  <Form.Dropdown labelText="Patient Group" />
                </Grid.Item>
                {/* In Lorenzo if the "Assault" option is chosen from patient Group  */}
                {/* then "Record incident on finish" checkbox appears. */}

                <Grid.Item>
                  <Form.Dropdown labelText="Place of Incident" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown labelText="Mode of Arrival" />
                </Grid.Item>
              </Grid.Column>
              <Grid.Column>
                {/* Ambulance job number can only be completed if the mode of Arrival involves an ambulance.  */}
                <Grid.Item>
                  <Form.Input type="number" labelText="Ambulance Job Number" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown labelText="Ambulance Trust" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input type="Date" labelText="Ambulance Handover Date" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input type="Time" labelText="Ambulance Handover Time" />
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
                <Grid.Item>
                  <Form.Input type="text" labelText="Accompanied By" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown labelText="Relationship" />
                </Grid.Item>

                <Grid.Item>
                  <Form.AutoSuggest labelText="Area" />
                </Grid.Item>
              </Grid.Column>
            </Grid>
            <Grid>
              <Grid.Column>
                <Grid.Item>
                  <Form.TextArea labelText="Comments" rows="5" />
                </Grid.Item>
              </Grid.Column>
            </Grid>

            <Grid>
              <Grid.Column>
                <Grid.Item>
                  <Form.Display
                    htmlFor="ED attendances at this organisation in the last 12 months"
                    labelText="ED attendances at this organisation in the last 12 months"
                  >
                    3 (example)
                  </Form.Display>
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
                <Grid.Item>
                  <Form.Display
                    htmlFor="All visible ED attendances"
                    labelText="All visible ED attendances"
                  >
                    5 (example)
                  </Form.Display>
                </Grid.Item>
              </Grid.Column>
            </Grid>

            <Form.Text as="h2" heading>
              Referral
            </Form.Text>
            <Grid>
              <Grid.Column>
                <Grid.Item>
                  <Form.Dropdown labelText="Associate Referral" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown labelText="Admin Category" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Button text="Create Referral/Episode" />
                </Grid.Item>

                <Grid.Item>
                  <Form.AutoSuggest labelText="Select Existing Referral" />
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
                <Grid.Item>
                  <Form.Display
                    htmlFor="Referred to Health Organisation"
                    labelText="Referred to Health Organisation"
                  >
                    Test Hospital (example)
                  </Form.Display>
                </Grid.Item>

                <Grid.Item>
                  <Form.Display
                    htmlFor="Referred to Type"
                    labelText="Referred to Type"
                  >
                    Care Provider (example)
                  </Form.Display>
                </Grid.Item>

                <Grid.Item>
                  <Form.Display
                    htmlFor="Referred to Name"
                    labelText="Referred to Name"
                  >
                    Jo Bloggs (example)
                  </Form.Display>
                </Grid.Item>

                <Grid.Item>
                  <Form.Display
                    htmlFor="Referral Type"
                    labelText="Referral Type"
                  >
                    Emergency (example)
                  </Form.Display>
                </Grid.Item>

                <Grid.Item>
                  <Form.Display
                    htmlFor="Referral Source"
                    labelText="Referral Source"
                  >
                    Self Referral (example)
                  </Form.Display>
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
                <Grid.Item>
                  <Form.AutoSuggest labelText="Specialty" />
                </Grid.Item>
                <Grid.Item>
                  <Form.AutoSuggest labelText="Treatment Function" />
                </Grid.Item>
              </Grid.Column>
            </Grid>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
}
