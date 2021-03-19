// Import: Packages
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./Details.elements";

// Import: Components
import { Grid, Input, Radio, Text } from "../../../../components";

// SubPage: Details
export default function Details() {
  return (
    <>
      <Container data-testid={"details"}>
        <Wrapper>
          <Text heading as="h2">
            Details
          </Text>

          <Grid>
            <Grid.Column>
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
            </Grid.Column>
          </Grid>
        </Wrapper>
      </Container>
    </>
  );
}
