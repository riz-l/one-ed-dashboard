// Import: Packages
import React, { useState } from "react";
import ReactModal from "react-modal";
import { useSelector } from "react-redux";

// Import: Assets
// Consider adding an svg for the button.

// Import: Elements
import { Container, FormWrapper } from "./MoveLocation.elements";
import "./MoveLocation.styles.css";

// Import: Components
import { Button, Form, Grid, PageTitle } from "../index";

// Component: MoveLocation
export default function MoveLocation() {
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

  // Redux: Fetches CareProvider and location from the global state
  const careProvider = useSelector(
    (state) => state.selectedPatient.patientData[0].CareProvider
  );

  const area = useSelector(
    (state) => state.selectedPatient.patientData[0].location
  );

  return (
    <>
      <Container data-testid={"moveLocation"}>
        <Button onClick={openModal} text="Move Location" />

        <ReactModal
          isOpen={isModalOpen}
          contentLabel="MoveLocation"
          onRequestClose={closeModal}
          className="Modal"
          overlayClassName="Overlay"
          closeTimeoutMS={100}
          ariaHideApp={false}
        >
          <FormWrapper>
            <div id="pageTitleDiv">
              <PageTitle
                heading="Move Location"
                backgroundColor="#ffffff"
                subheading=""
                padding="0 0 0 0"
              />
              <Button text="Close" onClick={closeModal} />
            </div>

            <Grid>
              <Grid.Column>
                <Grid.Item>
                  <Form.Text subheading>Current Location</Form.Text>
                </Grid.Item>

                <Grid.Item>
                  <Form.Display htmlFor="actualArea" labelText="Actual Area">
                    {/* TODO should be something like ED Waiting room, see if there is a more approprite peice of date to use here. */}
                    {area}
                  </Form.Display>
                </Grid.Item>

                <Grid.Item>
                  <Form.Display
                    htmlFor="careProvider"
                    labelText="Care Provider"
                  >
                    {careProvider}
                  </Form.Display>
                </Grid.Item>

                <Grid.Item>
                  <Form.Display htmlFor="arrivalTime" labelText="Arrival Time">
                    {/* TODO need to use Global State redux here */}
                  </Form.Display>
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
                <Grid.Item>
                  <Form.Text subheading>Move To</Form.Text>
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown htmlFor="area" labelText="Area" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Display htmlFor="movedOn" labelText="Moved On">
                    {/* TODO needs to show the current time  */}
                  </Form.Display>
                </Grid.Item>

                <Grid.Item>
                  <Form.Text subheading={true}>Transfer Type</Form.Text>
                  <Form.Radio name="transferType" text="Temporary" />
                  <Form.Radio name="transferType" text="Permanent" />
                </Grid.Item>
              </Grid.Column>
            </Grid>
          </FormWrapper>
        </ReactModal>
      </Container>
    </>
  );
}
