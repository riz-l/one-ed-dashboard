// Import: Packages
import React, { useState } from "react";
// import ReactModal from "react-modal";
import { useSelector } from "react-redux";

// Import: Elements
import {
  Container,
  FormWrapper,
  Header,
  StyledModal,
} from "./AddAlert.elements";
import "./AddAlert.styles.css";

// Import: Components, subPages
import { Button, Form, Grid } from "../index";

// Component: AddAlert
export default function AddAlert() {
  // State: isModalOpen
  const [isModalOpen, setIsModalOpen] = useState(false);

  // onClick: Opens Modal
  function openModal() {
    setIsModalOpen((isModalOpen) => !isModalOpen);
  }

  // onClick: Closes Modal
  function closeModal() {
    setIsModalOpen((isModalOpen) => !isModalOpen);
  }

  // Redux: Extracts username from global state
  const currentUser = useSelector((state) => {
    if (state.userDetails.details.ControlActEvent) {
      return state.userDetails.details.ControlActEvent.Subject.Value[0]
        .UserRoleProfile[0].UserID.identifierName;
    }
  });

  return (
    <>
      <Container data-testid={"addAlert"}>
        <Button
          margin=" 0rem 0rem 0rem 2rem"
          onClick={openModal}
          text="Add Alert"
        />

        <StyledModal
          isOpen={isModalOpen}
          contentLabel="AddAlert"
          onRequestClose={closeModal}
          className="Modal"
          overlayClassName="Overlay"
          closeTimeoutMS={100}
          ariaHideApp={false}
        >
          <FormWrapper>
            <Header>
              <h3>Add Alert</h3>
              <Button text="Close" onClick={closeModal} />
            </Header>

            {/* TODO This component needs to be able to create new alerts. Decide if it neeeds to be able to amend existing alerts. */}

            <Form>
              <Grid>
                <Grid.Column>
                  <Grid.Item>
                    <Form.Dropdown htmlFor="alertType" labelText="Alert Type" />
                  </Grid.Item>

                  <Grid.Item>
                    <Form.Dropdown htmlFor="alertName" labelText="Alert Name" />
                  </Grid.Item>

                  <Grid.Item>
                    <Form.Text as="h2" subheading>
                      Risk to:
                    </Form.Text>
                  </Grid.Item>

                  <Grid.Item horizontal>
                    <Form.Checkbox
                      htmlFor="riskTo"
                      margin="0rem 1rem 0rem 0rem"
                      text="Self"
                      value="self"
                    />
                    <Form.Checkbox
                      htmlFor="riskTo"
                      margin="0rem 1rem 0rem 0rem"
                      text="Health Care Staff"
                      value="healthCareStaff"
                    />
                    <Form.Checkbox
                      htmlFor="riskTo"
                      margin="0rem 1rem 0rem 0rem"
                      text="Property"
                      value="property"
                    />
                    <Form.Checkbox
                      htmlFor="riskTo"
                      margin="0rem 1rem 0rem 0rem"
                      text="Other"
                      value="other"
                    />
                  </Grid.Item>

                  <Grid.Item>
                    <Form.Text as="h2" subheading>
                      Scope
                    </Form.Text>
                    <Form.Checkbox
                      checked
                      text="All encounters & episodes"
                      htmlFor="allEncountersAndEpisodes"
                    />
                    {/* TODO the below autosuggest list should only appear if the user deselects the "all enocunters and epsiodes checkbox" */}
                    {/* TODO I think that the current encounter/episode is shown and can be selected by the user. In Lorenzo there is an option to search for encounters and epsiodes.  */}
                    <Form.AutoSuggest htmlFor="scope" />
                  </Grid.Item>

                  <Grid.Item>
                    <Form.Dropdown htmlFor="severity" labelText="Severity" />
                  </Grid.Item>
                </Grid.Column>

                <Grid.Column>
                  <Grid.Item>
                    <Form.Dropdown htmlFor="onsetDate" labelText="Onset Date" />
                    {/* Depending on what the user selects in Onset Date conditionally display either "Date", "Month & Year" or "nothing". */}
                  </Grid.Item>

                  <Grid.Item>
                    <Form.Input htmlFor="date" labelText="Date" type="date" />
                  </Grid.Item>

                  <Grid.Item>
                    <Form.Dropdown htmlFor="month" labelText="Month" />
                  </Grid.Item>

                  <Grid.Item>
                    <Form.Dropdown htmlFor="year" labelText="Year" />
                  </Grid.Item>

                  <Grid.Item>
                    <Form.Checkbox
                      text="Is Significant"
                      htmlFor="isSignificant"
                    />
                  </Grid.Item>

                  <Grid.Item>
                    <Form.TextArea
                      htmlFor="alertDescription"
                      labelText="Alert Description"
                      rows="3"
                    />
                  </Grid.Item>
                </Grid.Column>

                <Grid.Column>
                  <Grid.Item>
                    <Form.Dropdown
                      htmlFor="confidenceLevel"
                      labelText="Confidence Level"
                    />
                  </Grid.Item>

                  <Grid.Item>
                    <Form.Dropdown
                      htmlFor="informationSource"
                      labelText="Information Source"
                    />
                  </Grid.Item>

                  <Grid.Item>
                    {/* TODO A few of the Alert Types trigger a need to fill in a CDC form. Example = FGM (Female Genital Mutilation) */}
                    {/* TODO Confirm if this and possibly other CDC forms need creating. If so they would probably open up as a secondary modal.  */}
                    <Form.Button text="Placeholder Link to CDC form" />
                  </Grid.Item>

                  <Grid.Item>
                    <Form.Display htmlFor="recordedBy" labelText="Recorded By">
                      {currentUser ? currentUser : "no user logged in"}
                    </Form.Display>
                  </Grid.Item>

                  <Grid.Item>
                    <Form.Display htmlFor="recordedOn" labelText="Recorded On">
                      placeholder add redux
                    </Form.Display>
                  </Grid.Item>
                </Grid.Column>
              </Grid>

              <Grid>
                <Grid.Column>
                  <Grid.Item>
                    <Form.Text subheading>Alert Status</Form.Text>
                  </Grid.Item>

                  <Grid.Item>
                    <Form.Dropdown htmlFor="status" labelText="Status" />
                  </Grid.Item>

                  <Grid.Item>
                    <Form.Input
                      htmlfor="expectedConclusionDate"
                      labelText="Expected Conclusion Date"
                      type="Date"
                    />
                  </Grid.Item>

                  {/* TODO "On Expected Conclusion Date" cannot be filled in unless an "expected conclusion date" has been entered.  */}
                  <Grid.Item>
                    <Form.Dropdown
                      htmlFor="onExpectedConclusionDate"
                      labelText="On Expected Conclusion Date"
                    />
                  </Grid.Item>
                </Grid.Column>

                <Grid.Column>
                  <Grid.Item>
                    <Form.Input
                      htmlfor="alertReviewDate"
                      labelText="Alert Review Date"
                      type="Date"
                    />
                  </Grid.Item>
                  {/* TODO "Send Review Reminder to", "search recipients" and "select recipients" can only be filled in if an "Alert Review Date" has been entered. */}
                  {/* TODO In Lorenzo you cannot send a review reminder to yourself. I am not sure why this is. Investigate. */}

                  <Grid.Item>
                    <Form.Text as="h2" subheading>
                      Send Review Reminder To:
                    </Form.Text>
                  </Grid.Item>

                  <Grid.Item horizontal>
                    <Form.Radio
                      margin="0rem 1rem 0rem 0rem"
                      name="sendReviewReminderTo"
                      text="Care Provider"
                    />
                    <Form.Radio
                      margin="0rem 1rem 0rem 0rem"
                      name="sendReviewReminderTo"
                      text="Team"
                    />
                  </Grid.Item>

                  {/* In Lorenzo there is a modal for searching for recipients and it is different depening on if care provider (an individual) or Team is selected. */}
                  <Grid.Item>
                    <Form.AutoSuggest
                      htmlFor="searchRecipients"
                      labelText="Search Recipients"
                    />
                  </Grid.Item>

                  {/* In lorenzo there is an option to add multiple recipients which appear in a list once selected form the above search.  */}

                  {/* TODO Hide the below form components unless the status is set to closed by the user.  */}

                  <Grid.Item>
                    <Form.Dropdown
                      htmlFor="closedDate"
                      labelText="Closed Date"
                    />
                    {/* TODO Depending on what the user selects in Closed Date, conditionally display either Date or Month & Year. */}
                  </Grid.Item>

                  <Grid.Item>
                    <Form.Input
                      htmlfor="actualClosedDate"
                      labelText="Date"
                      type="Date"
                    />
                  </Grid.Item>

                  <Grid.Item>
                    <Form.Dropdown htmlFor="closedMonth" labelText="Month" />
                  </Grid.Item>

                  <Grid.Item>
                    <Form.Input
                      htmlFor="closedYear"
                      labelText="Closed Year"
                      type="number"
                    />
                  </Grid.Item>

                  {/* onBehalfOf needs to appear if Open or Closed is selected.  */}
                  <Grid.Item>
                    <Form.AutoSuggest
                      htmlFor="onBehalfOf"
                      labelText="On Behalf Of"
                    />
                  </Grid.Item>
                </Grid.Column>

                <Grid.Column>
                  {/* TODO link to API and add an onClick attribute */}
                  <Grid.Item>
                    <Button text="Submit" type="submit" />
                  </Grid.Item>
                </Grid.Column>
              </Grid>
            </Form>
          </FormWrapper>
        </StyledModal>
      </Container>
    </>
  );
}
