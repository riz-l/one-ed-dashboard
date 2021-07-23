// Import: Packages
import React, { useState } from "react";

// Import: Elements
import {
  Container,
  Frame,
  Header,
  StyledModal,
  Window,
} from "./ReportModal.elements";
import "./ReportModal.styles.css";

// Import: Components
import { Button, PageTitle } from "../index";

// Component: ReportModal
export default function ReportModal({ patientID }) {
  // Accessing .env variables
  const apiUrl = process.env.REACT_APP_INTEGRATION_REPORT;

  // State: Local State
  const [isModalOpen, setIsModalOpen] = useState(false);

  // onClick: Functions for opening and closing the modal
  function openModal() {
    setIsModalOpen((isModalOpen) => !isModalOpen);
  }
  function closeModal() {
    setIsModalOpen((isModalOpen) => !isModalOpen);
  }

  return (
    <>
      <Container data-testid={"reportModal"}>
        <Button
          fontSize="0.8rem"
          onClick={openModal}
          padding="0.2rem 0.8rem"
          text="Report"
        />
      </Container>

      <StyledModal
        ariaHideApp={false}
        className="Modal"
        closeTimeoutMS={100}
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        overlayClassName="Overlay"
      >
        <Header>
          <PageTitle
            backgroundColor="#ffffff"
            heading="Integration Report"
            padding="1rem 0 2rem 0"
            subheading="OneResponse Patient details"
          />
          <Button onClick={closeModal} text="Close" />
        </Header>

        <Window>
          <Frame src={`${apiUrl}/?ePRID=${patientID}`} />
        </Window>
      </StyledModal>
    </>
  );
}
