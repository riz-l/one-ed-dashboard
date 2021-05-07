// Import: Packages
import React, { useState } from "react";
import ReactModal from "react-modal";

// Import: Assets
// Consider adding this svg to the button to open the modal. Required additional styling and props on the button.
// import { ReactComponent as AttendanceIcon } from "../../../assets/img/icon/ward-RegAndAttendance.svg";

// Import: Elements
import { Container, FormWrapper, Header } from "./Attendance.elements";
import "./Attendance.styles.css";

// Import: Components, SubPages
import { Button, PrimaryNavigation, ReportSection } from "../index";
import { CreateAttendance, Registration } from "./subPages";

// Component: Attendance
export default function Attendance() {
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

  // State: isRegistration, isCreateAttendance
  const [isRegistration, setIsRegistration] = useState(false);
  const [isCreateAttendance, setIsCreateAttendance] = useState(true);

  // onClick: Renders Registration SubPage
  function renderRegistration() {
    setIsCreateAttendance(false);
    setIsRegistration(true);
  }

  // onClick: Renders CreateAttendance SubPage
  function renderCreateAttendance() {
    setIsRegistration(false);
    setIsCreateAttendance(true);
  }

  return (
    <>
      <Container data-testid={"attendance"}>
        <Button onClick={openModal} text="Attendance"></Button>

        <ReactModal
          isOpen={isModalOpen}
          contentLabel="Attendance"
          onRequestClose={closeModal}
          className="Modal"
          overlayClassName="Overlay"
          closeTimeoutMS={100}
          ariaHideApp={false}
        >
          {/* To remove the margin above the button I will need to modify the button component  */}
          {/* elements file or use inline styling. */}
          <FormWrapper>
            <Header>
              <h3>Create Attendance & Registration</h3>
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
                isRegistration ? (
                  <Registration />
                ) : isCreateAttendance ? (
                  <CreateAttendance />
                ) : null
              }
            />
          </FormWrapper>
        </ReactModal>
      </Container>
    </>
  );
}
