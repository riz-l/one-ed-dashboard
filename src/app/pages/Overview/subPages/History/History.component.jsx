// Import: Packages
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./History.elements";

// Import: Components
import { Grid, Input, Radio, Text } from "../../../../components";

// SubPage: History
export default function History() {
  return (
    <>
      <Container data-testid={"history"}>
        <Wrapper>
          <Text heading as="h2">
            HISTORY
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
