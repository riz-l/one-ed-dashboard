// Import: Packages
import React, { useState } from "react";
import ReactModal from "react-modal";
import { useSelector } from "react-redux";

// Import: Assets
import { Container, FormWrapper, Header } from "./AddAllergy.elements";
import "./AddAllergy.styles.css";

// Import: Components, subPages
import { Button, Form, Grid } from "../index";

// Component: AddAllergy
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
  const currentUser = useSelector((state) => {
    if (state.userDetails.details.ControlActEvent) {
      return state.userDetails.details.ControlActEvent.Subject.Value[0]
        .UserRoleProfile[0].UserID.identifierName;
    }
  });

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
                  <Grid.Item>
                    <Form.Dropdown
                      htmlFor="allergyType"
                      labelText="Allergy Type"
                    />
                  </Grid.Item>
                  <Grid.Item>
                    <Form.AutoSuggest htmlFor="allergen" labelText="Allergen" />
                  </Grid.Item>
                  <Grid.Item>
                    <Form.AutoSuggest htmlFor="reaction" labelText="Reaction" />
                  </Grid.Item>
                  <Grid.Item>
                    <Form.Dropdown htmlFor="severity" labelText="Severity" />
                    {/* Need to add ability to record multiple reactions and severities.  */}
                  </Grid.Item>
                </Grid.Column>
                <Grid.Column>
                  <Grid.Item>
                    <Form.Dropdown htmlFor="onsetDate" labelText="Onset Date" />
                    {/* Depending on what the user selects in Onset Date conditionally display either Date, Month & Year or nothing. */}
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
                    <Form.Dropdown
                      htmlFor="confidenceLevel"
                      labelText="Confidence Level"
                    />
                  </Grid.Item>
                </Grid.Column>
                <Grid.Column>
                  <Grid.Item>
                    {/* The MHRA form only appears for allergy types: Drug Allergy, Drug Adverse Reaction and Drug Intollerance */}
                    <Form.Anchor href="https://yellowcard.mhra.gov.uk/">
                      Link to MHRA Form
                    </Form.Anchor>
                  </Grid.Item>
                  <Grid.Item>
                    <Form.Checkbox
                      htmlFor="mhraFormCompleted"
                      text="MHRA form completed"
                    />
                  </Grid.Item>
                  <Grid.Item>
                    <Form.Dropdown
                      htmlFor="informationSource"
                      labelText="Information Source"
                    />
                  </Grid.Item>
                  <Grid.Item>
                    <Form.Checkbox
                      htmlFor="isSignificant"
                      text="Is significant"
                    />
                  </Grid.Item>
                  <Grid.Item>
                    {/* TODO: see if a margin or cols can be added to give some space between the textarea and the modal edge. */}
                    <Form.TextArea
                      htmlFor="comments"
                      labelText="Comments"
                      rows="3"
                    />
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

              <Form.Text subheading>Allergy/ADR Status</Form.Text>
              <Grid>
                <Grid.Column>
                  <Grid.Item>
                    <Form.Dropdown htmlFor="status" labelText="Status" />
                  </Grid.Item>
                </Grid.Column>
                {/* TODO Hide the closed date column unless the status is set to closed by the user.  */}
                <Grid.Column>
                  <Grid.Item>
                    <Form.Dropdown
                      htmlFor="closedDate"
                      labelText="Closed Date"
                    />
                    {/* TODO Depending on what the user selects in Clsoed Date conditionally display either Date or Month & Year. */}
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
                </Grid.Column>
                <Grid.Column>
                  {/* TODO link to API and add an onClick attribute */}
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
