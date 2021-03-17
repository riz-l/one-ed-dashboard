// Import: Packages
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./Details.elements";

// Import: Components
import { Grid, Radio } from "../../../../components";

// SubPage: Details
export default function Details() {
  return (
    <>
      <Container data-testid={"details"}>
        <Wrapper>
          <Grid>
            <Grid.Column>
              <Grid.Item>
                <p>Component: Radio</p>
                <Radio />
              </Grid.Item>
              <Grid.Item>
                <h3>Test item</h3>
                <p>Test item text</p>
              </Grid.Item>
              <Grid.Item>
                <h3>Test item</h3>
                <p>Test item text</p>
              </Grid.Item>
            </Grid.Column>

            <Grid.Column>
              <Grid.Item>
                <h3>Test item</h3>
                <p>Test item text</p>
              </Grid.Item>
              <Grid.Item>
                <h3>Test item</h3>
                <p>Test item text</p>
              </Grid.Item>
              <Grid.Item>
                <h3>Test item</h3>
                <p>Test item text</p>
              </Grid.Item>
            </Grid.Column>

            <Grid.Column>
              <Grid.Item>
                <h3>Test item</h3>
                <p>Test item text</p>
              </Grid.Item>
              <Grid.Item>
                <h3>Test item</h3>
                <p>Test item text</p>
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
