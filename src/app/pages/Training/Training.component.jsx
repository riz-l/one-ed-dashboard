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
                          htmlFor="componentCheckbox2"
                          text="Component: Checkbox 1"
                          under={true}
                        />
                      </Grid.Item>

                      <Grid.Item>
                        <Form.Checkbox
                          checked={true}
                          htmlFor="componentCheckbox2"
                          text="Component: Checkbox 2"
                          under={false}
                        />
                      </Grid.Item>

                      <Grid.Item>
                        <Form.Text as="h2" subheading>
                          Component: Radio Buttons
                        </Form.Text>
                      </Grid.Item>
                      <Grid.Item horizontal>
                        <Form.Radio
                          checked={false}
                          href="radio1"
                          name="RadioTest"
                          text="Radio1"
                          value="radio1"
                          margin="0rem 1rem 0rem 0rem"
                        />
                        <Form.Radio
                          checked={false}
                          href="radio2"
                          margin="0rem 1rem 0rem 0rem"
                          name="RadioTest"
                          text="Radio2"
                          value="radio2"
                        />
                        <Form.Radio
                          checked={true}
                          href="radio3"
                          margin="0rem 1rem 0rem 0rem"
                          name="RadioTest"
                          text="Radio3"
                          value="radio3"
                        />
                      </Grid.Item>

                      <Grid.Item>
                        <Form.Radio
                          href="radio4"
                          name="RadioTest"
                          text="Radio4"
                          value="radio4"
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

                      <Grid.Item horizontal>
                        <Form.Input
                          htmlFor="componentInputDate"
                          labelText="Component: Input (date)"
                          margin="0rem 1rem 0rem 0rem"
                          type="date"
                        />

                        <Form.Input
                          htmlFor="componentInputTime"
                          labelText="Component: Input (time)"
                          margin="0rem 1rem 0rem 0rem"
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
