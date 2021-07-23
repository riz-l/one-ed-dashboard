// Import: Packages
import React, { useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";

// Import: Elements
import {
  Container,
  FormHeader,
  FormWrapper,
  StyledModal,
} from "./MoveLocation.elements";
import "./MoveLocation.styles.css";

// Import: Components
import { Button, Form, Grid, PageTitle } from "../index";

// Component: MoveLocation
export default function MoveLocation() {
  // Redux: useSelector
  const selectedPatient = useSelector((state) => {
    if (state.selectedPatient) {
      return state.selectedPatient;
    }
  });

  // State: Local state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // onClick: Functions for opening and closing the modal
  function openModal() {
    setIsModalOpen((isModalOpen) => !isModalOpen);
  }
  function closeModal() {
    setIsModalOpen((isModalOpen) => !isModalOpen);
  }

  // Current Date, Time
  const date = new Date();
  const formattedDate = date.toISOString().substr(0, 10);
  const time = date.toLocaleTimeString(); // Triage Time
  const finalDate = moment(formattedDate).format("YYYY-MM-DD"); // Triage Date
  const putDateTime = finalDate.concat("T", time, "Z");
  const newDateTime = new Date(putDateTime);
  newDateTime.setHours(newDateTime.getHours() - 2);
  newDateTime.setSeconds(newDateTime.getSeconds() - 10);
  const newTime = newDateTime.toLocaleTimeString();
  const editedNewDateTime = moment(newDateTime).format("YYYY-MM-DD");
  const putEditedNewDateTime = editedNewDateTime.concat("T", newTime, "Z");

  return (
    <>
      <Container data-testid={"moveLocation"}>
        <Button onClick={openModal} text="Move Location" />

        <StyledModal
          ariaHideApp={false}
          className="Modal"
          closeTimeoutMS={100}
          contentLabel="MoveLocation"
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          overlayClassName="Overlay"
        >
          <FormWrapper>
            <FormHeader>
              <PageTitle
                backgroundColor="transparent"
                heading="Move Location"
                padding="0 0 2rem 0"
                subheading="Move Patient to a different area"
              />
              <Button onClick={closeModal} margin="0 2rem 0 0" text="Close" />
            </FormHeader>

            <Grid>
              <Grid.Column>
                <Grid.Item>
                  <Form.Text subheading>Current Location</Form.Text>
                </Grid.Item>

                <Grid.Item>
                  <Form.Display htmlFor="actualArea" labelText="Actual Area">
                    {selectedPatient && selectedPatient.patientData[0]
                      ? selectedPatient.patientData[0].location
                      : "N/A"}
                  </Form.Display>
                </Grid.Item>

                <Grid.Item>
                  <Form.Display
                    htmlFor="careProvider"
                    labelText="Care Provider"
                  >
                    {selectedPatient && selectedPatient.patientData[0]
                      ? selectedPatient.patientData[0].CareProvider
                      : "N/A"}
                  </Form.Display>
                </Grid.Item>

                <Grid.Item>
                  <Form.Display
                    htmlFor="arrivalDateTime"
                    labelText="Arrival Date/Time"
                  >
                    {selectedPatient && selectedPatient.patientData[0]
                      ? moment(selectedPatient.patientData[0].StartDate).format(
                          "MMMM Do YYYY, HH:mm:ss"
                        )
                      : "N/A"}
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
                    {moment(putEditedNewDateTime).format(
                      "MMMM Do YYYY, HH:mm:ss"
                    )}
                  </Form.Display>
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
                <Grid.Item>
                  <Form.Text subheading>Transfer Type</Form.Text>
                  <Grid.Item horizontal>
                    <Form.Radio
                      htmlFor="temporary"
                      margin="0 1rem 0.8rem 0"
                      name="transferType"
                      text="Temporary"
                      value="Temporary"
                    />
                    <Form.Radio
                      htmlFor="permanent"
                      name="transferType"
                      text="Permanent"
                      value="Permanent"
                    />
                  </Grid.Item>
                </Grid.Item>
              </Grid.Column>
            </Grid>
          </FormWrapper>
        </StyledModal>
      </Container>
    </>
  );
}
