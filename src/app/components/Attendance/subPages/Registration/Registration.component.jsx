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
                  <Form.Input
                    htmlFor="nhsNumber"
                    labelText="NHS Number"
                    type="number"
                  />
                </Grid.Item>

                {/* In Lorenzo this field is locked. I'm not sure where the value comes from */}
                <Grid.Item>
                  <Form.Input
                    htmlFor="patientID"
                    labelText="Patient ID"
                    type="number"
                  />
                </Grid.Item>

                {/* Should default to the current date. */}
                <Grid.Item>
                  <Form.Input
                    htmlFor="registrationDate"
                    labelText="Registration date"
                    type="date"
                  />
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
                <Grid.Item>
                  <Form.Dropdown htmlFor="title" labelText="Title" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input htmlFor="surname" labelText="Surname" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input htmlFor="forename" labelText="Forename" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input htmlFor="middleName" labelText="Middle Name" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown htmlFor="gender" labelText="Gender" />
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
                <Grid.Item>
                  <Form.Input
                    htmlFor="dateOfBirth"
                    labelText="Date of Birth"
                    type="date"
                  />
                </Grid.Item>

                {/* Age calculates automatically from date of birth and the user can also enter an age. */}
                <Grid.Item>
                  <Form.Input htmlFor="age" labelText="Age" type="number" />
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
                  <Form.TextArea
                    htmlFor="additionalBenefits"
                    labelText="Additional Details"
                    rows="5"
                  />
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
                  <Form.Input
                    htmlFor="premisesName"
                    labelText="Premises Name"
                    type="text"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="houseNumberAndStreetName"
                    labelText="House Number and Street Name"
                    type="text"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="locality"
                    labelText="Locality"
                    type="text"
                  />
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
                <Grid.Item>
                  <Form.Input htmlFor="city" labelText="City" type="text" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input htmlFor="county" labelText="County" type="text" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="postcode"
                    labelText="Postcode"
                    type="text"
                  />
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
                  <Form.Input
                    htmlFor="telephoneHome"
                    labelText="Telephone (Home)"
                    type="number"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="telephoneMobile"
                    labelText="Telephone (Mobile)"
                    type="number"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="telephoneWork"
                    labelText="Telephone (Work)"
                    type="number"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="emailAddress"
                    labelText="Email Address"
                    type="email"
                  />
                </Grid.Item>
              </Grid.Column>
            </Grid>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
}
