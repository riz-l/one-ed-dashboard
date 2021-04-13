// Import: Packages
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./UrineObs.elements";

// Import: Components
import { Grid, Input, Radio, Text } from "../../../../components";

// SubPage: UrineObs
export default function UrineObs() {
  return (
    <>
      <Container data-testid={"urineObs"}>
        <Wrapper>
          <Text heading as="h2">
            Urine Observations
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
                <Radio text="NAD" />
              </Grid.Item>
              <Grid.Item>
                <Input labelText="Pro" />
              </Grid.Item>
              <Grid.Item>
                <Input labelText="Bld" />
              </Grid.Item>
              <Grid.Item>
                <Input labelText="Glu" />
              </Grid.Item>
              <Grid.Item>
                <Input labelText="Leu" />
              </Grid.Item>
            </Grid.Column>

            <Grid.Column>
              <Grid.Item>
                <Input labelText="Nit" />
              </Grid.Item>
              <Grid.Item>
                <Input labelText="Ket" />
              </Grid.Item>
              <Grid.Item>
                <Radio text="First RadioButton" />
              </Grid.Item>
              <Grid.Item>
                <Radio text="Second RadioButton" />
              </Grid.Item>
            </Grid.Column>
          </Grid>
        </Wrapper>
      </Container>
    </>
  );
}
