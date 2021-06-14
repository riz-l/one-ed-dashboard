// Import: Packages
import React from "react";

// Import: Assets
import { ReactComponent as ButtonIcon } from "../../../assets/img/icon/ward-dashboard.svg";

// Import: Elements
import { Container, ContentWrapper, Wrapper } from "./Training.elements";

// Import: Components
import { Form, Grid, PageTitle, ReportSection } from "../../components";

// Page: Training
export default function Training() {
  return (
    <>
      <Container data-testid={"training"}>
        <Wrapper>
          <PageTitle
            heading="Training"
            subheading="User guide and training videos"
          />

          <ContentWrapper>
            <ReportSection
              content={
                <Form>
                  <Grid>
                    <Grid.Column>
                      <Grid.Item>
                        <Form.AutoSuggest
                          htmlFor="componentAutoSuggest"
                          labelText="Component: AutoSuggest"
                        />
                      </Grid.Item>

                      <Grid.Item>
                        <Form.Button
                          icon={<ButtonIcon />}
                          text="Component: Button"
                        />
                      </Grid.Item>

                      <Grid.Item>
                        <Form.Checkbox
                          checked={false}
                          htmlFor="componentCheckbox"
                          text="Component: Checkbox"
                          under={false}
                        />
                      </Grid.Item>

                      <Grid.Item>
                        <Form.Radio
                          checked={false}
                          href="radio1"
                          name="RadioTest"
                          text="Radio1"
                          value="radio1"
                        />
                        <Form.Radio
                          checked={true}
                          href="radio2"
                          name="RadioTest"
                          text="Radio2"
                          value="radio2"
                        />
                      </Grid.Item>

                      <Grid.Item>
                        <Form.Dropdown
                          htmlFor="dropdownExample"
                          labelText="componentDropdown"
                          left={false}
                        />
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
                        <Form.Text as="p">Component: Indicator</Form.Text>
                        <Form.Indicator
                          green
                          message="Give patient drugs and admit to Ward."
                          title="NEWS"
                        />
                      </Grid.Item>
                    </Grid.Column>

                    <Grid.Column>
                      <Grid.Item>
                        <Form.Input
                          htmlFor="componentInputText"
                          labelText="Component: Input (text)"
                        />
                      </Grid.Item>

                      <Grid.Item>
                        <Form.Input
                          htmlFor="componentInputNumber"
                          labelText="Component: Input (number)"
                          type="number"
                        />
                      </Grid.Item>

                      <Grid.Item>
                        <Form.Input
                          center={false}
                          htmlFor="componentInputEmail"
                          labelText="Component: Input (email)"
                          left={false}
                          placeholder="placeholder@placeholder.com"
                          type="email"
                        />
                      </Grid.Item>

                      <Grid.Item>
                        <Form.Input
                          htmlFor="componentInputDate"
                          labelText="Component: Input (date)"
                          type="date"
                        />
                      </Grid.Item>

                      <Grid.Item>
                        <Form.Input
                          htmlFor="componentInputTime"
                          labelText="Component: Input (time)"
                          type="time"
                        />
                      </Grid.Item>

                      <Grid.Item>
                        <Form.Input
                          htmlFor="componentInputTel"
                          labelText="Component: Input (tel)"
                          type="tel"
                        />
                      </Grid.Item>
                    </Grid.Column>

                    <Grid.Column>
                      <Grid.Item>
                        <Form.TextArea
                          htmlFor="componentTextArea"
                          labelText="Component: TextArea"
                          placeholder="Text goes here..."
                        />
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
