// Import: Packages
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./Alerts.elements";

// Import: Components
import {
  Form,
  Grid,
  // ReportEntry,
  Text,
} from "../../../../components";

// SubPage: Alerts
export default function Alerts() {
  return (
    <>
      <Container data-testid={"alerts"}>
        <Wrapper>
          <Text as="h2" heading>
            Alerts
          </Text>

          <Form>
            <Grid>
              <Grid.Column>
                <Grid.Item>
                  <Form.Button text="Component: Button" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Checkbox text="Component: Checkbox" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Radio text="Component: Radio" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Text as="p">Component: Dropdown</Form.Text>
                  <Form.Dropdown />
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
                <Grid.Item>
                  <Form.Input labelText="Component: Input (text)" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    type="number"
                    labelText="Component: Input (number)"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    type="email"
                    labelText="Component: Input (email)"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input type="date" labelText="Component: Input (date)" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input type="time" labelText="Component: Input (time)" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input type="tel" labelText="Component: Input (tel)" />
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
                <Grid.Item>
                  <Form.TextArea labelText="Component: TextArea" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Text as="p">Component: Text (Default)</Form.Text>
                </Grid.Item>

                <Grid.Item>
                  <Form.Text as="h2" heading>
                    Component: Text (Heading)
                  </Form.Text>
                </Grid.Item>

                <Grid.Item>
                  <Form.Text as="h3" subheading>
                    Component: Text (SubHeading)
                  </Form.Text>
                </Grid.Item>

                <Grid.Item>
                  <Form.Text as="p" text>
                    Component: Text (Text)
                  </Form.Text>
                </Grid.Item>
              </Grid.Column>
            </Grid>
          </Form>

          {/* <ReportEntry
            alerts
            type="Impairment"
            details="Communication difficulties"
            status="Active"
            // slideStatus={isEntrySlideOpen}
            // slideToggle={setIsEntrySlideOpen}
          /> */}
        </Wrapper>
      </Container>
    </>
  );
}
