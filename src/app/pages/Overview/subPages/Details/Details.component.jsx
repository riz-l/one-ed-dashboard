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
          <Grid>
            <Grid.Column>
              <Grid.Item>
                <Radio text="Component: Radio" />
              </Grid.Item>

              <Grid.Item>
                <Input labelText="Component: Input" />
              </Grid.Item>

              <Grid.Item>
                <Text>Component: Text (Default)</Text>
              </Grid.Item>
            </Grid.Column>

            <Grid.Column>
              <Grid.Item>
                <Text heading>Component: Text (Heading)</Text>
              </Grid.Item>

              <Grid.Item>
                <Text subheading>Component: Text (SubHeading)</Text>
              </Grid.Item>

              <Grid.Item>
                <Text text>Component: Text (Text)</Text>
              </Grid.Item>
            </Grid.Column>
          </Grid>
        </Wrapper>
      </Container>
    </>
  );
}
