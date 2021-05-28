// Import: Packages
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./CreateAttendance.elements";

// Import: Components
import { Form, Grid } from "../../../../components";

// SubPage: CreateAttendance
export default function CreateAttendance() {
  return (
    <>
      <Container data-testid={"createAttendance"}>
        <Wrapper>
          <Form>
            <Form.Text as="h2" heading>
              Create Attendance
            </Form.Text>

            <Grid>
              <Grid.Column>
                {/* TODO: Arrival Date needs to default to the current date */}
                <Grid.Item>
                  <Form.Input
                    htmlFor="arrivalDate"
                    labelText="Arrival Date"
                    type="date"
                  />
                </Grid.Item>

                {/* TODO: Arrival Time needs to default to the current time */}
                <Grid.Item>
                  <Form.Input
                    htmlFor="arrivalTime"
                    labelText="Arrival Time"
                    type="time"
                  />
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
                <Grid.Item>
                  <Form.AutoSuggest
                    htmlFor="presentingComplaint"
                    labelText="Presenting Complaint"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="attendanceType"
                    labelText="Attendance Type"
                  />
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
                <Grid.Item>
                  <Form.AutoSuggest
                    htmlFor="responsibleCareProvider"
                    labelText="Responsible Care Provider"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="attendanceSource"
                    labelText="Attendance Source"
                  />
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
                <Grid.Item>
                  <Form.Dropdown htmlFor="assignedTo" labelText="Assigned to" />
                </Grid.Item>
              </Grid.Column>
            </Grid>

            <Grid>
              <Grid.Column>
                <Grid.Item>
                  <Form.Text as="h3" subheading>
                    Incident
                  </Form.Text>

                  <Form.Checkbox htmlFor="timeElapsed" text="Time elapsed" />
                  <Form.Checkbox htmlFor="dateAndTime" text="Date and Time" />
                </Grid.Item>

                {/* TODO: Conditionally renders if 'Time Elapsed' is selected */}
                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="timeElapsed"
                    labelText="Time Elapsed"
                  />
                </Grid.Item>

                {/* TODO: Conditionallly renders 'Incident Date' if 'Date and Time' is selected */}
                <Grid.Item>
                  <Form.Input
                    htmlFor="incidentDate"
                    labelText="Incident Date"
                    type="Date"
                  />
                </Grid.Item>

                {/* TODO: Conditionallly renders 'Incident Time' if 'Date and Time' is selected */}
                <Grid.Item>
                  <Form.Input
                    htmlFor="incidentTime"
                    labelText="Incident Time"
                    type="Time"
                  />
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="patientGroup"
                    labelText="Patient Group"
                  />
                </Grid.Item>

                {/* TODO: In Lorenzo if the 'Assault' option is selected from 'Patient Group'  */}
                {/* ... the 'Record incident on finish' checkbox renders */}

                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="placeOfIncident"
                    labelText="Place of Incident"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="modeOfArrival"
                    labelText="Mode of Arrival"
                  />
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
                {/* TODO: 'Ambulance Job Number' can only be completed if the 'Mode of Arrival' involves an ambulance.  */}
                <Grid.Item>
                  <Form.Input
                    htmlFor="ambulanceJobNumber"
                    labelText="Ambulance Job Number"
                    type="number"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="ambulanceTrust"
                    labelText="Ambulance Trust"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="ambulanceHandoverDate"
                    labelText="Ambulance Handover Date"
                    type="Date"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="ambulanceHandoverTime"
                    labelText="Ambulance Handover Time"
                    type="Time"
                  />
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
                <Grid.Item>
                  <Form.Input
                    htmlFor="accompaniedBy"
                    labelText="Accompanied By"
                    type="text"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="relationship"
                    labelText="Relationship"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.AutoSuggest htmlFor="area" labelText="Area" />
                </Grid.Item>
              </Grid.Column>
            </Grid>

            <Grid>
              <Grid.Column>
                <Grid.Item>
                  <Form.TextArea
                    htmlFor="comments"
                    labelText="Comments"
                    rows="5"
                  />
                </Grid.Item>
              </Grid.Column>
            </Grid>

            <Grid>
              <Grid.Column>
                <Grid.Item>
                  <Form.Display
                    htmlFor="ED attendances at this organisation in the last 12 months"
                    labelText="ED attendances at this organisation in the last 12 months"
                  >
                    3 (example)
                  </Form.Display>
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
                <Grid.Item>
                  <Form.Display
                    htmlFor="All visible ED attendances"
                    labelText="All visible ED attendances"
                  >
                    5 (example)
                  </Form.Display>
                </Grid.Item>
              </Grid.Column>
            </Grid>

            <Form.Text as="h2" heading>
              Referral
            </Form.Text>

            <Grid>
              <Grid.Column>
                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="associateReferral"
                    labelText="Associate Referral"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="adminCategory"
                    labelText="Admin Category"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Button text="Create Referral/Episode" />
                </Grid.Item>

                <Grid.Item>
                  <Form.AutoSuggest
                    htmlFor="selectExistingReferral"
                    labelText="Select Existing Referral"
                  />
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
                <Grid.Item>
                  <Form.Display
                    htmlFor="referredToHealthOrganisation"
                    labelText="Referred to Health Organisation"
                  >
                    Test Hospital (example)
                  </Form.Display>
                </Grid.Item>

                <Grid.Item>
                  <Form.Display
                    htmlFor="referredToType"
                    labelText="Referred to Type"
                  >
                    Care Provider (example)
                  </Form.Display>
                </Grid.Item>

                <Grid.Item>
                  <Form.Display
                    htmlFor="referredToName"
                    labelText="Referred to Name"
                  >
                    Jo Bloggs (example)
                  </Form.Display>
                </Grid.Item>

                <Grid.Item>
                  <Form.Display
                    htmlFor="referralType"
                    labelText="Referral Type"
                  >
                    Emergency (example)
                  </Form.Display>
                </Grid.Item>

                <Grid.Item>
                  <Form.Display
                    htmlFor="referralSource"
                    labelText="Referral Source"
                  >
                    Self Referral (example)
                  </Form.Display>
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
                <Grid.Item>
                  <Form.AutoSuggest htmlFor="specialty" labelText="Specialty" />
                </Grid.Item>

                <Grid.Item>
                  <Form.AutoSuggest
                    htmlFor="treatmentFunction"
                    labelText="Treatment Function"
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
