// Import: Packages
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./CEDObs.elements";

// Import: Components
import { Grid, Input, Text } from "../../../../components";

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
                <Input labelText="Pain Score" />
              </Grid.Item>
              <Grid.Item>
                <Input labelText="Pulse Rate" />
              </Grid.Item>
              <Grid.Item>
                <Input labelText="BP Systolic First" />
              </Grid.Item>
              <Grid.Item>
                <Input labelText="BP Systolic Second" />
              </Grid.Item>
              <Grid.Item>
                <Input labelText="Resp Rate" />
              </Grid.Item>
              <Grid.Item>
                <Input labelText="Oxygen SATS" />
              </Grid.Item>
            </Grid.Column>

            <Grid.Column>
              <Grid.Item>
                <Input labelText="Supplemental O2" />
              </Grid.Item>
              <Grid.Item>
                <Input labelText="Temp" />
              </Grid.Item>
              <Grid.Item>
                <Input labelText="Weight (kg)" />
              </Grid.Item>
              <Grid.Item>
                <Input labelText="Height (cm)" />
              </Grid.Item>
              <Grid.Item>
                <Input labelText="Blood Sugar (mmol/l)" />
              </Grid.Item>
              <Grid.Item>
                <Input labelText="PEFR (l/min)" />
              </Grid.Item>
            </Grid.Column>

            <Grid.Column>
              <Grid.Item>
                <Input labelText="Capillary Refill" />
              </Grid.Item>
              <Grid.Item>
                <Input labelText="POPS Other" />
              </Grid.Item>
              <Grid.Item>
                <Input labelText="POPS Gut Feeling" />
              </Grid.Item>
              <Grid.Item>
                <Input labelText="POPS Breathing" />
              </Grid.Item>
              <Grid.Item>
                <Input labelText="AVPU" />
              </Grid.Item>
            </Grid.Column>
          </Grid>

          <Text heading as="h2">
            POPS Score
          </Text>
        </Wrapper>
      </Container>
    </>
  );
}
