// Import: Packages
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./NeuroObs.elements";

// Import: Components
import { Display, Grid, Text } from "../../../../components";

// SubPage: NeuroObs
export default function NeuroObs() {
  return (
    <>
      <Container data-testid={"neuroObs"}>
        <Wrapper>
          <Text as="h2" heading>
            Neuro Obs
          </Text>

          <Grid.Column>
            <Grid.Column>
              <Grid.Item>
                <Text as="h3" subheading>
                  GCS
                </Text>
              </Grid.Item>

              <Grid.Item>
                <Display htmlFor="eyes" labelText="Eyes">
                  {/* TODO add redux here */}
                </Display>
              </Grid.Item>

              <Grid.Item>
                <Display htmlFor="verbal" labelText="Verbal">
                  {/* TODO add redux here */}
                </Display>
              </Grid.Item>

              <Grid.Item>
                <Display htmlFor="motor" labelText="Motor">
                  {/* TODO add redux here */}
                </Display>
              </Grid.Item>

              {/* GCS Total needs to be a calculated value adding up the scored for Eyes, Verbal and Motor. */}

              <Grid.Item>
                <Display htmlFor="gcsTotal" labelText="GCS Total">
                  {/* TODO add redux here */}
                </Display>
              </Grid.Item>
            </Grid.Column>

            <Grid.Column>
              <Grid.Item>
                <Text as="h3" subheading>
                  Pupils
                </Text>
              </Grid.Item>

              {/* Replace radio buttons with a Display component as answer will either be equal or unequal.  */}
              <Grid.Item>
                <Display
                  htmlFor="equalOrUnequal"
                  name="equalOrUnequal"
                  text="Equal or Unequal"
                >
                  {/* TODO add redux. Need to convert the true or false for the 2 radio buttons into  */}
                  {/* "Equal" or "Unequal" */}
                </Display>
              </Grid.Item>

              <Grid.Item>
                <Display htmlFor="leftPupilSize" labelText="Left Pupil Size">
                  {/* TODO add redux */}
                </Display>
              </Grid.Item>

              <Grid.Item>
                <Display
                  htmlFor="leftPupilReaction"
                  labelText="Left Pupil Reaction"
                >
                  {/* TODO add redux */}
                </Display>
              </Grid.Item>

              <Grid.Item>
                <Display htmlFor="rightPupilSize" labelText="Right Pupil Size">
                  {/* TODO add redux */}
                </Display>
              </Grid.Item>

              <Grid.Item>
                <Display
                  htmlFor="rightPupilReaction"
                  labelText="Right Pupil Reaction"
                >
                  {/* TODO add redux */}
                </Display>
              </Grid.Item>
            </Grid.Column>

            <Grid.Column>
              <Grid.Item>
                <Text as="h3" subheading>
                  Limb Movement
                </Text>
              </Grid.Item>

              <Grid.Item>
                <Display htmlFor="leftArm" labelText="Left Arm">
                  {/* TODO add redux */}
                </Display>
              </Grid.Item>

              <Grid.Item>
                <Display htmlFor="leftLeg" labelText="Left Leg">
                  {/* TODO add redux */}
                </Display>
              </Grid.Item>

              <Grid.Item>
                <Display htmlFor="rightArm" labelText="Right Arm">
                  {/* TODO add redux */}
                </Display>
              </Grid.Item>

              <Grid.Item>
                <Display htmlFor="rightLeg" labelText="Right Leg">
                  {/* TODO add redux */}
                </Display>
              </Grid.Item>
            </Grid.Column>
          </Grid.Column>
        </Wrapper>
      </Container>
    </>
  );
}
