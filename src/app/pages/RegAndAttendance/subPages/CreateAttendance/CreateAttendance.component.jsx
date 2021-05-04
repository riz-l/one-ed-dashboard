// Import: Packages
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./CreateAttendance.elements";

// Import: Components
import { Form, Grid } from "../../../../components";

// SubPage: Create Attendance
export default function CreateAttendance() {
  return (
    <>
      <Container data-testid={"createAttendance"}>
        <Wrapper>
          <Form>
            <Form.Text as="h2" heading>
              Registration
            </Form.Text>

            <Grid>
              <Grid.Column>
                <Grid.Item>
                  <Form.Input type="number" labelText="NHS Number" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input type="number" labelText="Patient ID" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input type="date" labelText="Registration date" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    type="number"
                    labelText="Systolic Blood Pressue (mmHg)"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    type="number"
                    labelText="Diastolic Blood Pressue (mmHg)"
                  />
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
                <Grid.Item>
                  <Form.Input type="number" labelText="Temperature (°C)" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    type="number"
                    labelText="Blood Glucose Level (mmol/L)"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    type="number"
                    labelText="Oxygenation Saturation (%)"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Checkbox text="Supplemental Oxygen" />
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
                <Grid.Item>
                  <Form.Dropdown labelText="Adult AVPU" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Checkbox text="Adult PERLA" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Text as="h3" subheading>
                    Adult NEWS Score =
                  </Form.Text>
                </Grid.Item>

                <Grid.Item>
                  <Form.Text as="h3" subheading>
                    Sepsis Score =
                  </Form.Text>
                </Grid.Item>

                {/* Need to add some alert popups. 
                      See OED37 for an image of how the alerts look in Lorenzo. */}
              </Grid.Column>
            </Grid>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
}
