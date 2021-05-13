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
                  <Form.Dropdown htmlFor="title" labelText="Title" />
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
                  <Form.Dropdown htmlFor="gender" labelText="Gender" />
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
                  <Form.Checkbox
                    htmlFor="estimatedDateOfBirth"
                    text="Estimated Date of Birth"
                  />
                </Grid.Item>

                {/* Estimated date of birth may need to be a month and year dropdown. It should only be editable if the checkbox for it has been ticked.  */}
                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="dateOfBirth"
                    labelText="Date of Birth"
                  />
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
                <Grid.Item>
                  <Form.AutoSuggest
                    htmlFor="currentGP"
                    labelText="Current GP"
                  />
                </Grid.Item>

                {/*Should default to the users healthcare organisation  */}
                <Grid.Item>
                  <Form.AutoSuggest
                    htmlFor="registeredHealthOrganisation"
                    labelText="Registered Health Organisation"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="confidentialityStatus"
                    labelText="Confidentiality Status"
                  />
                </Grid.Item>

                {/* Confidentiality Reason is mandatory if Confidentiality Status is set to Local Secure. */}
                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="confidentialityReason"
                    labelText="Confidentiality Reason"
                  />
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
                {/* Not selectable in Lorenzo */}
                <Grid.Item>
                  <Form.Checkbox
                    htmlFor="nextOfKinDetailsUnavailable"
                    text="Next of Kin Details Unavailable"
                  />
                </Grid.Item>

                {/* Not selectable in Lorenzo */}
                <Grid.Item>
                  <Form.Checkbox
                    htmlFor="educationInformationUnavailable"
                    text="Education Information Unavailable"
                  />
                </Grid.Item>

                {/* Not selectable in Lorenzo */}
                <Grid.Item>
                  <Form.Checkbox
                    htmlFor="sendPatientAideInviation"
                    text="Send PatientAide Invitation"
                  />
                </Grid.Item>
              </Grid.Column>
            </Grid>

            <Grid>
              <Grid.Column>
                <Grid.Item>
                  <Form.Checkbox
                    htmlFor="overseasAddress"
                    text="Overseas Address"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="addressType"
                    labelText="Address Type"
                  />
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
                  <Form.Dropdown
                    htmlFor="primaryContact"
                    labelText="Primary Contact"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input type="number" labelText="Telephone (Home)" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input type="number" labelText="Telephone (Mobile)" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input type="number" labelText="Telephone (Work)" />
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
