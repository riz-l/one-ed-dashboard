// Import: Packages
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./CEDObs.elements";

// Import: Components
import { Display, Grid, Text } from "../../../../components";

// SubPage: CEDObs
export default function CEDObs() {
  return (
    <>
      <Container data-testid={"cedObs"}>
        <Wrapper>
          <Text heading as="h2">
            CED Observations
          </Text>

          <Grid>
            <Grid.Column>
              <Grid.Item>
                <Display htmlFor="painScore" labelText="Pain Score">
                  {/* TODO add redux value */}
                </Display>
              </Grid.Item>

              <Grid.Item>
                <Display htmlFor="pulseRate" labelText="Pulse Rate">
                  {/* TODO add redux value */}
                </Display>
              </Grid.Item>

              <Grid.Item>
                <Display
                  htmlFor="bpSystolicFirst"
                  labelText="BP Systolic First"
                >
                  {/* TODO add redux value */}
                </Display>
              </Grid.Item>

              <Grid.Item>
                <Display
                  htmlFor="bpSystolicSecond"
                  labelText="BP Systolic Second"
                >
                  {/* TODO add redux here */}
                </Display>
              </Grid.Item>

              <Grid.Item>
                <Display htmlFor="restRate" labelText="Rest Rate">
                  {/* TODO add redux here */}
                </Display>
              </Grid.Item>

              <Grid.Item>
                <Display htmlFor="oxygenSATS" labelText="Oxygen SATS">
                  {/* TODO add redux here */}
                </Display>
              </Grid.Item>
            </Grid.Column>

            <Grid.Column>
              <Grid.Item>
                <Display htmlFor="supplementalO2" labelText="Supplemental O2">
                  {/* TODO add redux here */}
                </Display>
              </Grid.Item>

              <Grid.Item>
                <Display htmlFor="temp" labelText="Temp">
                  {/* TODO add redux here */}
                </Display>
              </Grid.Item>

              <Grid.Item>
                <Display htmlFor="weightKG" labelText="Weight (kg)">
                  {/* TODO add redux here */}
                </Display>
              </Grid.Item>

              <Grid.Item>
                <Display htmlFor="heightCM" labelText="Height (cm)">
                  {/* TODO add redux */}
                </Display>
              </Grid.Item>

              <Grid.Item>
                <Display htmlFor="bloodSugar" labelText="Blood sugar (mmol/l)">
                  {/* TODO add redux */}
                </Display>
              </Grid.Item>

              <Grid.Item>
                <Display htmlFor="pefr" labelText="PEFR (l/min)">
                  {/* TODO add redux */}
                </Display>
              </Grid.Item>
            </Grid.Column>

            <Grid.Column>
              <Grid.Item>
                <Display htmlFor="capillaryRefill" labelText="Capillary Refill">
                  {/* TODO add redux */}
                </Display>
              </Grid.Item>

              <Grid.Item>
                <Display htmlFor="popsOther" labelText="POPS Other">
                  {/* TODO add redux */}
                </Display>
              </Grid.Item>

              <Grid.Item>
                <Display htmlFor="popsGutFeeling" labelText="POPS Gut Feeling">
                  {/* TODO add redux */}
                </Display>
              </Grid.Item>

              <Grid.Item>
                <Display htmlFor="popsBreathing" labelText="POPS Breathing">
                  {/* TODO add redux */}
                </Display>
              </Grid.Item>

              <Grid.Item>
                <Display htmlFor="avpu" labelText="AVPU">
                  {/* TODO add redux */}
                </Display>
              </Grid.Item>

              <Grid.Item>
                <Display htmlFor="popsScore" labelText="POPS Score">
                  {/*TODO add redux  */}
                </Display>
              </Grid.Item>
            </Grid.Column>
          </Grid>
        </Wrapper>
      </Container>
    </>
  );
}
