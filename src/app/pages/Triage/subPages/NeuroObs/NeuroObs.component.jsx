// Import: Packages
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./NeuroObs.elements";

// Import: Components
import { Form, Grid } from "../../../../components";

// SubPage: NeuroObs
export default function NeuroObs() {
  return (
    <>
      <Container data-testid={"neuroObs"}>
        <Wrapper>
          <Form>
            <Form.Text as="h2" heading>
              Neuro Obs
            </Form.Text>

            <Grid>
              <Grid.Column>
                <Grid.Item>
                  <Form.Text as="h3" subheading>
                    GCS
                  </Form.Text>
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown htmlFor="eyes" labelText="Eyes" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown htmlFor="verbal" labelText="Verbal" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown htmlFor="motor" labelText="Motor" />
                </Grid.Item>

                {/* GCS Total needs to be a calculated value adding up the scored for Eyes, Verbal and Motor. */}

                <Grid.Item>
                  <Form.Input
                    htmlFor="gCSTotal"
                    labelText="GCS Total"
                    type="number"
                  />
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
                <Grid.Item>
                  <Form.Text as="h3" subheading>
                    Pupils
                  </Form.Text>
                </Grid.Item>

                <Grid.Item>
                  <Form.Radio htmlFor="equal" name="pupils" text="Equal" />
                  <Form.Radio htmlFor="unequal" name="pupils" text="Unequal" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="leftPupilSize"
                    labelText="Left Pupil Size"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="leftPupilReaction"
                    labelText="Left Pupil Reaction"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="rightPupilSize"
                    labelText="Right Pupil Size"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="rightPupilReaction"
                    labelText="Right Pupil Reaction"
                  />
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
                <Grid.Item>
                  <Form.Text as="h3" subheading>
                    Limb Movement
                  </Form.Text>
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown htmlFor="leftArm" labelText="Left Arm" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown htmlFor="leftLeg" labelText="Left Leg" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown htmlFor="rightArm" labelText="Right Arm" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown htmlFor="rightLeg" labelText="Right Leg" />
                </Grid.Item>
              </Grid.Column>
            </Grid>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
}
