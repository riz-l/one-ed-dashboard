// Import: Packages
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./Details.elements";

// Import: Components
import { Grid, Input, Radio } from "../../../../components";

// SubPage: Details
export default function Details() {
  return (
    <>
      <Container data-testid={"details"}>
        <Wrapper>
          <Grid>
            <Grid.Column>
              <Grid.Item>
                <h3>Component: Radio</h3>
                <Radio />
              </Grid.Item>

              <Grid.Item>
                <h3>Component: Input</h3>
                <Input />
              </Grid.Item>

              <Grid.Item>
                <h3>Test item</h3>
                <p>Test item text</p>
              </Grid.Item>
            </Grid.Column>
          </Grid>
        </Wrapper>
      </Container>
    </>
  );
}
