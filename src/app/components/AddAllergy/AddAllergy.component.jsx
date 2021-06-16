// Import: Packages
import React, { useState } from "react";
import ReactModal from "react-modal";
import { useSelector } from "react-redux";

// Import: Assets
import { Container, FormWrapper, Header } from "./AddAllergy.elements";
import "./AddAllergy.styles.css";

// Import: Components, subPages
import { Button, Form, Grid } from "../index";

// Component: Attendance
export default function AddAllergy() {
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
  const currentUser = useSelector(
    (state) =>
      state.userDetails.details.ControlActEvent.Subject.Value[0]
        .UserRoleProfile[0].UserID.identifierName
  );

  return (
    <>
      <Container data-testid={"addAllergy"}>
        <Button
          margin=" 0rem 0rem 0rem 2rem"
          onClick={openModal}
          text="Add Allergy"
        />

        <ReactModal
          isOpen={isModalOpen}
          contentLabel="AddAllergy"
          onRequestClose={closeModal}
          className="Modal"
          overlayClassName="Overlay"
          closeTimeoutMS={100}
          ariaHideApp={false}
        >
          <FormWrapper>
            <Header>
              <h3>Add Allergy</h3>
              <Button text="Close" onClick={closeModal} />
            </Header>

            {/* This component needs to be able to create new allergies and amend existing allergies. */}

            <Form>
              <Grid>
                <Grid.Column>
                  <Form.Dropdown
                    htmlFor="allergyType"
                    labelText="Allergy Type"
                  />
                  <Form.AutoSuggest htmlFor="allergen" labelText="Allergen" />
                  <Form.AutoSuggest htmlFor="reaction" labelText="Reaction" />
                  <Form.Dropdown htmlFor="severity" labelText="Severity" />
                  {/* Need to add ability to record multiple reactions and severities.  */}
                </Grid.Column>
                <Grid.Column>
                  <Form.Dropdown htmlFor="onsetDate" labelText="Onset Date" />
                  {/* Depending on what the user selects in Onset Date conditionally display either Date, Month & Year or nothing. */}
                  <Form.Input htmlFor="date" labelText="Date" type="date" />
                  <Form.Dropdown htmlFor="month" labelText="Month" />
                  <Form.Dropdown htmlFor="year" labelText="Year" />
                  <Form.Dropdown
                    htmlFor="confidenceLevel"
                    labelText="Confidence Level"
                  />
                </Grid.Column>
                <Grid.Column>
                  {/* The MHRA form only appears for allergy types: Drug Allergy, Drug Adverse Reaction and Drug Intollerance */}
                  <Form.Anchor href="https://yellowcard.mhra.gov.uk/">
                    Link to MHRA Form
                  </Form.Anchor>
                  <Form.Checkbox
                    htmlFor="mhraFormCompleted"
                    text="MHRA form completed"
                  />
                  <Form.Dropdown
                    htmlFor="informationSource"
                    labelText="Information Source"
                  />
                  <Form.Checkbox
                    htmlFor="isSignificant"
                    text="Is significant"
                  />

                  {/* TODO: see if a margin or cols can be added to give some space between the textarea and the modal edge. */}
                  <Form.TextArea
                    htmlFor="comments"
                    labelText="Comments"
                    rows="3"
                  />
                  <Form.Display htmlFor="recordedBy" labelText="Recorded By">
                    {currentUser}
                  </Form.Display>
                  <Form.Display htmlFor="recordedOn" labelText="Recorded On">
                    placeholder add redux
                  </Form.Display>
                </Grid.Column>
              </Grid>
              <Form.Text subheading>Allergy/ADR Status</Form.Text>
              <Grid>
                <Grid.Column>
                  <Form.Dropdown htmlFor="status" labelText="Status" />
                </Grid.Column>
                {/* TODO Hide the closed date column unless the status is set to closed by the user.  */}
                <Grid.Column>
                  <Form.Dropdown htmlFor="closedDate" labelText="Closed Date" />
                  {/* TODO Depending on what the user selects in Clsoed Date conditionally display either Date or Month & Year. */}
                  <Form.Input
                    htmlfor="actualClosedDate"
                    labelText="Date"
                    type="Date"
                  />

                  <Form.Dropdown htmlFor="closedMonth" labelText="Month" />
                  <Form.Input
                    htmlFor="closedYear"
                    labelText="Closed Year"
                    type="number"
                  />
                </Grid.Column>
                <Grid.Column>
                  {/* TODO link to API and add onClick attribute*/}
                  <Button text="Submit" type="submit" />
                </Grid.Column>
              </Grid>
            </Form>
          </FormWrapper>
        </ReactModal>
      </Container>
    </>
  );
}
