// Import: Packages
import React, { useState } from "react";
import ReactModal from "react-modal";

// Import: Icons
import { MdKeyboardArrowRight as ArrowIcon } from "react-icons/md";
import { GoAlert as AlertsIcon } from "react-icons/go";
import { GiMedicines as AllergiesIcon } from "react-icons/gi";
import { FaUserInjured as ComplaintIcon } from "react-icons/fa";
import { FaBandAid as ComplicationsIcon } from "react-icons/fa";
import { RiStethoscopeFill as DiagnosisIcon } from "react-icons/ri";
import { FaSearch as FindingsIcon } from "react-icons/fa";
import { FaUserNurse as ProceduresIcon } from "react-icons/fa";
import { FaBed as SymptomsIcon } from "react-icons/fa";
import { BiPlusMedical as DefaultIcon } from "react-icons/bi";

// Import: Elements
import {
  Arrow,
  ArrowContainer,
  Container,
  EntryContainer,
  Detail,
  Heading,
  Icon,
  Left,
  Right,
  Status,
  Wrapper,
} from "./ReportEntry.elements";
import "./ReportEntry.styles.css";

// Import: Components
import { Button, PageTitle } from "../index";

// Component: ReportEntry
export default function ReportEntry({
  alerts,
  allergies,
  complaint,
  complications,
  diagnosis,
  findings,
  procedures,
  // slideStatus,
  // slideToggle,
  symptoms,
  themeColor,
  icon,
  type,
  details,
  status,
  openedModal,
}) {
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
    <Container data-testid={"reportEntry"}>
      <Wrapper
        // onClick={
        //   slideToggle ? () => slideToggle((slideStatus) => !slideStatus) : null
        // }
        onClick={openModal}
        alerts={alerts}
        allergies={allergies}
        complaint={complaint}
        complications={complications}
        diagnosis={diagnosis}
        findings={findings}
        procedures={procedures}
        symptoms={symptoms}
        themeColor={themeColor}
      >
        <EntryContainer>
          <Left>
            <Heading>
              <Icon
                alerts={alerts}
                allergies={allergies}
                complaint={complaint}
                complications={complications}
                diagnosis={diagnosis}
                findings={findings}
                procedures={procedures}
                symptoms={symptoms}
                themeColor={themeColor}
              >
                {alerts ? (
                  <AlertsIcon />
                ) : allergies ? (
                  <AllergiesIcon />
                ) : complaint ? (
                  <ComplaintIcon />
                ) : complications ? (
                  <ComplicationsIcon />
                ) : diagnosis ? (
                  <DiagnosisIcon />
                ) : findings ? (
                  <FindingsIcon />
                ) : procedures ? (
                  <ProceduresIcon />
                ) : symptoms ? (
                  <SymptomsIcon />
                ) : icon ? (
                  icon
                ) : (
                  <DefaultIcon />
                )}
              </Icon>
              <h3>{type ? type : "Type"}</h3>
            </Heading>

            <Detail>
              <p>
                {details && details.length > 25
                  ? details.substring(0, 25) + "..."
                  : details && details.length < 25
                  ? details
                  : "Details"}
              </p>
            </Detail>
          </Left>

          <Right>
            <Status>
              <p>{status ? status : "Status"}</p>
            </Status>
          </Right>

          <ArrowContainer
            alerts={alerts}
            allergies={allergies}
            complaint={complaint}
            complications={complications}
            diagnosis={diagnosis}
            findings={findings}
            procedures={procedures}
            symptoms={symptoms}
            style={{ background: `${themeColor}` }}
          >
            <Arrow>
              <ArrowIcon />
            </Arrow>
          </ArrowContainer>
        </EntryContainer>
      </Wrapper>

      <ReactModal
        isOpen={isModalOpen}
        contentLabel={
          alerts
            ? "Alerts"
            : allergies
            ? "Allergies"
            : complaint
            ? "Complaint"
            : complications
            ? "Complications"
            : diagnosis
            ? "Diagnosis"
            : findings
            ? "Findings"
            : procedures
            ? "Procedures"
            : symptoms
            ? "Symptoms"
            : "Default Entry"
        }
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="Overlay"
        closeTimeoutMS={100}
        ariaHideApp={false}
      >
        <PageTitle
          backgroundColor="none"
          heading={
            alerts
              ? "Alerts"
              : allergies
              ? "Allergies"
              : complaint
              ? "Complaint"
              : complications
              ? "Complications"
              : diagnosis
              ? "Diagnosis"
              : findings
              ? "Findings"
              : procedures
              ? "Procedures"
              : symptoms
              ? "Symptoms"
              : "Default Entry"
          }
          padding="0 0 2rem 0"
          subheading={
            alerts
              ? "Health History of Alerts"
              : allergies
              ? "Health History of Allergies"
              : complaint
              ? "Health History of Complaint"
              : complications
              ? "Health History of Complications"
              : diagnosis
              ? "Health History of Diagnosis"
              : findings
              ? "Health History of Findings"
              : procedures
              ? "Health History of Procedures"
              : symptoms
              ? "Health History of Symptoms"
              : "Default Entry"
          }
        />

        {openedModal}

        <Button text="Close" onClick={closeModal} />
      </ReactModal>
    </Container>
  );
}
