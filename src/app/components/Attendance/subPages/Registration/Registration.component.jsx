// Import: Packages
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./Registration.elements";

// Import: Components
import { Form, Grid } from "../../../../components";

// SubPage: Registration
export default function Registration() {
  return (
    <>
      <Container data-testid={"registration"}>
        <Wrapper>
          <Form>
            <Form.Text as="h2" heading>
              Registration
            </Form.Text>

            <Grid>
              <Grid.Column>
                {/* In Lorenzo this field is locked. I'm not sure where the value comes from */}
                <Grid.Item>
                  <Form.Input type="number" labelText="NHS Number" />
                </Grid.Item>

                {/* In Lorenzo this field is locked. I'm not sure where the value comes from */}
                <Grid.Item>
                  <Form.Input type="number" labelText="Patient ID" />
                </Grid.Item>

                {/* Should default to the current date. */}
                <Grid.Item>
                  <Form.Input type="date" labelText="Registration date" />
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
                <Grid.Item>
                  <Form.Dropdown labelText="Title" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input labelText="Surname" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input labelText="Forename" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input labelText="Middle Name" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown labelText="Gender" />
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
                <Grid.Item>
                  <Form.Input type="date" labelText="Date of Birth" />
                </Grid.Item>

                {/* Age calculates automatically from date of birth and the user can also enter an age. */}
                <Grid.Item>
                  <Form.Input type="number" labelText="Age" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Checkbox text="Estimated Date of Birth" />
                </Grid.Item>

                {/* Estimated date of birth may need to be a month and year dropdown. It should only be editable if the checkbox for it has been ticked.  */}
                <Grid.Item>
                  <Form.Dropdown labelText="Date of Birth" />
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
                <Grid.Item>
                  <Form.AutoSuggest labelText="Current GP" />
                </Grid.Item>

                {/*Should default to the users healthcare organisation  */}
                <Grid.Item>
                  <Form.AutoSuggest labelText="Registered Health Organisation" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown labelText="Confidentiality Status" />
                </Grid.Item>

                {/* Confidentiality Reason is mandatory if Confidentiality Status is set to Local Secure. */}
                <Grid.Item>
                  <Form.Dropdown labelText="Confidentiality Reason" />
                </Grid.Item>
              </Grid.Column>
            </Grid>

            <Grid>
              <Grid.Column>
                <Grid.Item>
                  <Form.TextArea labelText="Additional Details" rows="5" />
                </Grid.Item>
              </Grid.Column>
              <Grid.Column>
                {/* Not selectable in lorenzo */}
                <Grid.Item>
                  <Form.Checkbox text="Next of Kin Details Unavailable" />
                </Grid.Item>

                {/* Not selectable in lorenzo */}
                <Grid.Item>
                  <Form.Checkbox text="Education Information Unavailable" />
                </Grid.Item>

                {/* Not selectable in lorenzo */}
                <Grid.Item>
                  <Form.Checkbox text="Send PatientAide Invitation" />
                </Grid.Item>
              </Grid.Column>
            </Grid>
            <Grid>
              <Grid.Column>
                <Grid.Item>
                  <Form.Checkbox text="Overseas Address" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown labelText="Address Type" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input type="text" labelText="Premises Name" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    type="text"
                    labelText="House Number and Street Name"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input type="text" labelText="Locality" />
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
                <Grid.Item>
                  <Form.Input type="text" labelText="City" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input type="text" labelText="County" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input type="text" labelText="Postcode" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Display htmlFor="PAF" labelText="PAF">
                    (example)
                  </Form.Display>
                </Grid.Item>
              </Grid.Column>
              <Grid.Column>
                <Grid.Item>
                  <Form.Dropdown labelText="Primary Contact" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input type="number" labelText="Telephone (home)" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input type="number" labelText="Telephone (mobile)" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input type="number" labelText="Telephone (work)" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input type="email" labelText="Email Address" />
                </Grid.Item>
              </Grid.Column>
            </Grid>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
}
