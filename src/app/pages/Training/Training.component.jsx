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
import { Form, Grid, Indicator, ReportSection } from "../../components";

// Page: Training
export default function Training() {
  return (
    <>
      <Container data-testid={"training"}>
        <Wrapper>
          <Header>
            <h2>Training</h2>
            <span>User guide and training videos</span>
          </Header>

          <ContentWrapper>
            <ReportSection
              content={
                <Form>
                  <Grid>
                    <Grid.Column>
                      <Grid.Item>
                        <Form.AutoSuggest
                          labelText="Component: AutoSuggest"
                          left="true"
                        />
                      </Grid.Item>

                      <Grid.Item>
                        <Form.Button text="Component: Button" />
                      </Grid.Item>

                      <Grid.Item>
                        <Form.Checkbox
                          text="Component: Checkbox"
                          under={false}
                        />
                      </Grid.Item>

                      <Grid.Item>
                        <Form.Radio
                          // text="Component: Radio"
                          name="test1"
                          href="test2"
                          value="test3"
                        />
                        <Form.Radio
                          text="Radio2"
                          name="test1"
                          href="test2"
                          value="test3"
                          checked
                        />
                      </Grid.Item>

                      <Grid.Item>
                        <Form.Dropdown labelText="Component: Dropdown" />
                      </Grid.Item>

                      <Grid.Item>
                        <Form.Display
                          htmlFor="displayComponent"
                          labelText="Component: Display"
                        >
                          Display Component
                        </Form.Display>
                      </Grid.Item>

                      <Grid.Item>
                        <Form.Text as="p">Component: Anchor</Form.Text>
                        <Form.Anchor href="https://www.bing.com">
                          Link to Bing
                        </Form.Anchor>
                      </Grid.Item>

                      <Grid.Item>
                        <Indicator
                          title="NEWS"
                          message="Give patient drugs and admit to Ward."
                          // give component a prop of red, amber or green to determine box colour.
                          green
                        />
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
