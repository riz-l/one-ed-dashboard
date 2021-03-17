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
                <Radio text="Component: Radio" />
              </Grid.Item>

              <Grid.Item>
                <Input labelText="Component: Input" />
              </Grid.Item>
            </Grid.Column>
          </Grid>
        </Wrapper>
      </Container>
    </>
  );
}
