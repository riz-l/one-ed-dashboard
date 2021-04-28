// Import: Packages
import React from "react";

// Import: Elements
import {
  Container,
  ContentWrapper,
  Header,
  Wrapper,
} from "./Training.elements";

// Import: Components
import { Form, Grid, ReportSection } from "../../components";

// Page: EDOverview
export default function Training() {
  return (
    <>
      <Container data-testid={"training"}>
        <Wrapper>
          <Header>
            <h2>Training</h2>
            <span>
              The user guide and training videos can be accessed here.
            </span>
          </Header>

          <ContentWrapper>
            <ReportSection
              content={
                <Form>
                  <Grid>
                    <Grid.Column>
                      <Grid.Item>
                        <Form.AutoSuggest labelText="Component: AutoSuggest" />
                      </Grid.Item>

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
                        <Form.Dropdown labelText="Component: Dropdown" />
                      </Grid.Item>

                      <Grid.Item>
                        <Form.Anchor href="https://www.bing.com">
                          Link to Bing
                        </Form.Anchor>
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
                        <Form.Input
                          type="date"
                          labelText="Component: Input (date)"
                        />
                      </Grid.Item>

                      <Grid.Item>
                        <Form.Input
                          type="time"
                          labelText="Component: Input (time)"
                        />
                      </Grid.Item>

                      <Grid.Item>
                        <Form.Input
                          type="tel"
                          labelText="Component: Input (tel)"
                        />
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

                      <Grid.Item>
                        <Form.Text as="p" bold>
                          Component: Text (Bold)
                        </Form.Text>
                      </Grid.Item>
                    </Grid.Column>
                  </Grid>
                </Form>
              }
            />
          </ContentWrapper>
        </Wrapper>
      </Container>
    </>
  );
}
