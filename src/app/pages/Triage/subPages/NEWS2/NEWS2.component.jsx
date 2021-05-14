// Import: Packages
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./NEWS2.elements";

// Import: Components
import { Form, Grid } from "../../../../components";

// SubPage: NEWS2
export default function NEWS2() {
  return (
    <>
      <Container data-testid={"news2"}>
        <Wrapper>
          <Form>
            <Form.Text as="h2" heading>
              NEWS Score
            </Form.Text>

            <Grid>
              <Grid.Column>
                <Grid.Item>
                  <Form.Input
                    htmlFor="heartRate"
                    labelText="Heart Rate (beats/min)"
                    type="number"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="respiratoryRate"
                    labelText="Respiratory Rate (breaths/min)"
                    type="number"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="systolicBloodPressure"
                    labelText="Systolic Blood Pressue (mmHg)"
                    type="number"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="diastolicBloodPressure"
                    labelText="Diastolic Blood Pressue (mmHg)"
                    type="number"
                  />
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
                <Grid.Item>
                  <Form.Input
                    htmlFor="temperature"
                    labelText="Temperature (°C)"
                    type="number"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="bloodGlucoseLevel"
                    labelText="Blood Glucose Level (mmol/L)"
                    type="number"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="oxygenationSaturation"
                    labelText="Oxygenation Saturation (%)"
                    type="number"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Checkbox
                    htmlFor="supplementalOxygen"
                    text="Supplemental Oxygen"
                  />
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
                <Grid.Item>
                  <Form.Dropdown htmlFor="adultAVPU" labelText="Adult AVPU" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Checkbox htmlFor="adultPERLA" text="Adult PERLA" />
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
