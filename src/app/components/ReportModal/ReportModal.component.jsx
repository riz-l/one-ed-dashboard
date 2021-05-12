// Import: Packages
import React, { useState } from "react";
import ReactModal from "react-modal";

// Import: Elements
import { Container, Frame, Window } from "./ReportModal.elements";
import "./ReportModal.styles.css";

// Import: Components
import { Button } from "../index";

// Component: ReportModal
export default function ReportModal({ patientID }) {
  const apiUrl = process.env.REACT_APP_INTEGRATION_REPORT;

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

  return (
    <>
      <Container>
        <Button
          onClick={openModal}
          text="Report"
          fontSize="0.8rem"
          padding="0.2rem 0.8rem"
        />
      </Container>

      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="Overlay"
        closeTimeoutMS={100}
        ariaHideApp={false}
      >
        <h2>Report Modal</h2>
        <Button onClick={closeModal} text="Close" />

        <Window>
          <Frame src={`${apiUrl}/?ePRID=${patientID}`} />
        </Window>
      </ReactModal>
    </>
  );
}
