// Import: Packages
import React, { useState } from "react";
import ReactModal from "react-modal";

// Import: Elements
import { Container, FormWrapper, Header } from "./Attendance.elements";
import "./Attendance.styles.css";

// Import: Components, subPages
import { Button, PrimaryNavigation, ReportSection } from "../index";
import { CreateAttendance, Registration } from "./subPages";

// Component: Attendance
export default function Attendance() {
  // State:
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCreateAttendance, setIsCreateAttendance] = useState(true);
  const [isRegistration, setIsRegistration] = useState(false);

  // onClick: Functions for opening and closing the modal
  function openModal() {
    setIsModalOpen((isModalOpen) => !isModalOpen);
  }
  function closeModal() {
    setIsModalOpen((isModalOpen) => !isModalOpen);
  }

  // onClick: Functions for rendering subPages
  function renderCreateAttendance() {
    setIsRegistration(false);
    setIsCreateAttendance(true);
  }
  function renderRegistration() {
    setIsCreateAttendance(false);
    setIsRegistration(true);
  }

  return (
    <>
      <Container data-testid={"attendance"}>
        <Button onClick={openModal} text="Attendance" />

        <ReactModal
          ariaHideApp={false}
          className="Modal"
          closeTimeoutMS={100}
          contentLabel="Attendance"
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          overlayClassName="Overlay"
        >
          <FormWrapper>
            <Header>
              <h3>Create Attendance and Registration</h3>
              <Button text="Close" onClick={closeModal} />
            </Header>

            <ReportSection
              primaryNavigation={
                <PrimaryNavigation>
                  <PrimaryNavigation.Item
                    isActive={isCreateAttendance ? true : false}
                    onClick={renderCreateAttendance}
                  >
                    <PrimaryNavigation.Text>
                      Create Attendance
                    </PrimaryNavigation.Text>
                  </PrimaryNavigation.Item>

                  <PrimaryNavigation.Item
                    isActive={isRegistration ? true : false}
                    onClick={renderRegistration}
                  >
                    <PrimaryNavigation.Text>
                      Registration
                    </PrimaryNavigation.Text>
                  </PrimaryNavigation.Item>
                </PrimaryNavigation>
              }
              content={
                isCreateAttendance ? (
                  <CreateAttendance />
                ) : isRegistration ? (
                  <Registration />
                ) : null
              }
            />
          </FormWrapper>
        </ReactModal>
      </Container>
    </>
  );
}
