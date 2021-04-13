// Import: Packages
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./NeuroObs.elements";

// Import: Components
import { Grid, Input, Radio, Text } from "../../../../components";

// SubPage: NeuroObs
export default function NeuroObs() {
  return (
    <>
      <Container data-testid={"neuroObs"}>
        <Wrapper>
          <Text heading as="h2">
            Neuro Observations
          </Text>
          <Text heading as="h2">
            GCS
          </Text>

          <Grid>
            {/* <Grid.Column>
              <Grid.Item>
                <Radio text="Component: Radio" />
              </Grid.Item>

              <Grid.Item>
                <Input labelText="Component: Input" />
              </Grid.Item>

              <Grid.Item>
                <Text as="p">Component: Text (Default)</Text>
              </Grid.Item>
            </Grid.Column>

            <Grid.Column>
              <Grid.Item>
                <Text as="h2" heading>
                  Component: Text (Heading)
                </Text>
              </Grid.Item>

              <Grid.Item>
                <Text as="h3" subheading>
                  Component: Text (SubHeading)
                </Text>
              </Grid.Item>

              <Grid.Item>
                <Text as="p" text>
                  Component: Text (Text)
                </Text>
              </Grid.Item>
            </Grid.Column> */}

            <Grid.Column>
              <Grid.Item>
                <Input labelText="Eyes" />
              </Grid.Item>
              <Grid.Item>
                <Input labelText="Verbal" />
              </Grid.Item>
              <Grid.Item>
                <Input labelText="Motor" />
              </Grid.Item>
            </Grid.Column>
            <Text heading as="h2">
              GCS Total
            </Text>

            <Text heading as="h2">
              Pupils
            </Text>
            <Grid.Column>
              <Grid.Item>
                <Radio text="Equal" />
              </Grid.Item>
              <Grid.Item>
                <Radio text="Unequal" />
              </Grid.Item>
              <Grid.Item>
                <Input labelText="Left Pupil Size (mm)" />
              </Grid.Item>
              <Grid.Item>
                <Input labelText="Left Pupil Reaction" />
              </Grid.Item>
              <Grid.Item>
                <Input labelText="Right Pupil Size (mm)" />
              </Grid.Item>
              <Grid.Item>
                <Input labelText="Right Pupil Reaction" />
              </Grid.Item>
            </Grid.Column>

            <Text heading as="h2">
              Limb Movement
            </Text>
            <Grid.Column>
              <Grid.Item>
                <Input labelText="Left Arm" />
              </Grid.Item>
              <Grid.Item>
                <Input labelText="Left Leg" />
              </Grid.Item>
              <Grid.Item>
                <Input labelText="Right Arm" />
              </Grid.Item>
              <Grid.Item>
                <Input labelText="Right Leg" />
              </Grid.Item>
            </Grid.Column>
          </Grid>
        </Wrapper>
      </Container>
    </>
  );
}
