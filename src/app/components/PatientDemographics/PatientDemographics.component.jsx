// Import: Packages
import React, { useState } from "react";
import Modal from "react-modal";
import ReactModal from "react-modal";
import "./PatientDemographics.styles.css";

// Import: Assets
import { ReactComponent as InformationIcon } from "../../../assets/img/icon/information.svg";

// Import: Elements
import { Container, Header, Wrapper } from "./PatientDemographics.elements";

// Import: Components
import { Text } from "../index";

// Component: PatientDemographics
export default function PatientDemographics() {
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

  // Assigns Modal to root id used for App.js
  Modal.setAppElement("#root");

  return (
    <>
      <Container data-testid={"patientDemographics"}>
        <Wrapper>
          <Header onClick={openModal}>
            <InformationIcon />
            <h3>Patient Demographics</h3>
          </Header>
        </Wrapper>

        <ReactModal
          isOpen={isModalOpen}
          contentLabel="onRequestClose Example"
          onRequestClose={closeModal}
          className="Modal"
          overlayClassName="Overlay"
          closeTimeoutMS={100}
        >
          <Text heading as="h3">
            Patient Demographics
          </Text>
          <button type="button" onClick={closeModal}>
            Close Modal
          </button>
        </ReactModal>
      </Container>
    </>
  );
}
