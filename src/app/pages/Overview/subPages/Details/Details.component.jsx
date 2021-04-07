// Import: Packages
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./Details.elements";

// Import: Components
import {
  Checkbox,
  Dropdown,
  Grid,
  Input,
  Radio,
  Text,
} from "../../../../components";

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
                <Input labelText="Component: Input (text)" />
              </Grid.Item>

              <Grid.Item>
                <Input type="number" labelText="Component: Input (number)" />
              </Grid.Item>

              <Grid.Item>
                <Input type="email" labelText="Component: Input (email)" />
              </Grid.Item>

              <Grid.Item>
                <Input type="date" labelText="Component: Input (date)" />
              </Grid.Item>

              <Grid.Item>
                <Input type="time" labelText="Component: Input (time)" />
              </Grid.Item>

              <Grid.Item>
                <Input type="tel" labelText="Component: Input (tel)" />
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

            <Grid.Column>
              <Grid.Item>
                <Text as="p">Component: Checkbox</Text>
                <Checkbox />
              </Grid.Item>

              <Grid.Item>
                <Text as="p">Component: Dropdown</Text>
                <Dropdown />
              </Grid.Item>
            </Grid.Column>
          </Grid>
        </Wrapper>
      </Container>
    </>
  );
}
