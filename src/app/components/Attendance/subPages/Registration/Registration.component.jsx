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
                {/* TODO: Is this field needed? */}
                <Grid.Item>
                  <Form.Input
                    htmlFor="nhsNumber"
                    labelText="NHS Number"
                    type="number"
                  />
                </Grid.Item>

                {/* TODO: Is this field needed? */}
                <Grid.Item>
                  <Form.Input
                    htmlFor="patientID"
                    labelText="Patient ID"
                    type="number"
                  />
                </Grid.Item>

                {/* TODO: Should default to the current date. */}
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

                {/* TODO: Age should calculate from Date of Birth */}
                {/* ... user can also enter age manually */}
                <Grid.Item>
                  <Form.Input htmlFor="age" labelText="Age" type="number" />
                </Grid.Item>

                {/* TODO: Estimated Date of Birth possibly to be month and year Dropdown */}
                {/* ... it should only be editable if the Checkbox has been ticked */}
                <Grid.Item>
                  <Form.Checkbox
                    htmlFor="estimatedDateOfBirth"
                    text="Estimated Date of Birth"
                  />
                </Grid.Item>

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

                {/* TODO: Should default to the user's healthcare organisation  */}
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

                {/* TODO: Confidentiality Reason is mandatory if Confidentiality Status is set to Local Secure */}
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
                    htmlFor="additionalDetails"
                    labelText="Additional Details"
                    rows="5"
                  />
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
                {/* TODO: Not selectable in Lorenzo. Is this needed? */}
                <Grid.Item>
                  <Form.Checkbox
                    htmlFor="nextOfKinDetailsUnavailable"
                    text="Next of Kin Details Unavailable"
                  />
                </Grid.Item>

                {/* TODO: Not selectable in Lorenzo. Is this needed? */}
                <Grid.Item>
                  <Form.Checkbox
                    htmlFor="educationInformationUnavailable"
                    text="Education Information Unavailable"
                  />
                </Grid.Item>

                {/* TODO: Not selectable in Lorenzo. Is this needed? */}
                <Grid.Item>
                  <Form.Checkbox
                    htmlFor="sendPatientAideInvitation"
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
                  <Form.Display htmlFor="paf" labelText="PAF">
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
