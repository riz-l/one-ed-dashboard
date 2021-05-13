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
                    htmlFor="Pulse Rate"
                    labelText="Pulse Rate"
                    type="text"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="BP Systolic First"
                    labelText="BP Systolic First"
                    type="text"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="BP Systolic Second"
                    labelText="BP Systolic Second"
                    type="text"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="Rest Rate"
                    labelText="Rest Rate"
                    type="text"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="Oxygen SATS"
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
                  <Form.Input htmlFor="Temp" labelText="Temp" type="text" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="Weight (kg)"
                    labelText="Weight (kg)"
                    type="text"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="Height (cm)"
                    labelText="Height (cm)"
                    type="text"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="Blood sugar (mmol/l)"
                    labelText="Blood sugar (mmol/l)"
                    type="text"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="PEFR (l/min)"
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
                    htmlFor="pOPSOther"
                    labelText="POPS Other"
                    type="text"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="pOPSGutFeeling"
                    labelText="POPS Gut Feeling"
                    type="text"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="pOPSBreathing"
                    labelText="POPS Breathing"
                    type="text"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown htmlFor="aVPU" labelText="AVPU" type="text" />
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
