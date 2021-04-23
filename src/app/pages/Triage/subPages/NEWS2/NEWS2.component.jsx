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
                    type="number"
                    labelText="Heart Rate (beats per min)"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    type="number"
                    labelText="Respiratory Rate (breaths per min)"
                  />
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

                <Grid.Item>
                  <Form.Dropdown labelText="Adult AVPU" />
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
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
