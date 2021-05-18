// Import: Packages
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./CEDObs.elements";

// Import: Components
import { Grid, Form, Text } from "../../../../components";

// SubPage: CEDObs
export default function CEDObs() {
  return (
    <>
      <Container data-testid={"cedObs"}>
        <Wrapper>
          <Text heading as="h2">
            CED Observations
          </Text>

          <Form>
            <Grid>
              <Grid.Column>
                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="painScore"
                    labelText="Pain Score"
                    type="text"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="pulseRate"
                    labelText="Pulse Rate"
                    type="text"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="bpSystolicFirst"
                    labelText="BP Systolic First"
                    type="text"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="bpSystolicSecond"
                    labelText="BP Systolic Second"
                    type="text"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="restRate"
                    labelText="Rest Rate"
                    type="text"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="oxygenSATS"
                    labelText="Oxygen SATS"
                    type="text"
                  />
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="supplementalO2"
                    labelText="Supplemental O2"
                    type="text"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input htmlFor="temp" labelText="Temp" type="text" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="weightKG"
                    labelText="Weight (kg)"
                    type="text"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="heightCM"
                    labelText="Height (cm)"
                    type="text"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="bloodSugar"
                    labelText="Blood sugar (mmol/l)"
                    type="text"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="pefr"
                    labelText="PEFR (l/min)"
                    type="text"
                  />
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="capillaryRefill"
                    labelText="Capillary Refill"
                    type="text"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="popsOther"
                    labelText="POPS Other"
                    type="text"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="popsGutFeeling"
                    labelText="POPS Gut Feeling"
                    type="text"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="popsBreathing"
                    labelText="POPS Breathing"
                    type="text"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown htmlFor="avpu" labelText="AVPU" type="text" />
                </Grid.Item>
              </Grid.Column>
            </Grid>
          </Form>

          <Text heading as="h2">
            POPS Score
          </Text>
        </Wrapper>
      </Container>
    </>
  );
}
