// Import: Packages
import React, { useState } from "react";

// Import: Icons
import { GoAlert as AlertsIcon } from "react-icons/go";
import { GiMedicines as AllergiesIcon } from "react-icons/gi";
import { MdKeyboardArrowRight as ArrowIcon } from "react-icons/md";
import { FaUserInjured as ComplaintIcon } from "react-icons/fa";
import { FaBandAid as ComplicationsIcon } from "react-icons/fa";
import { BiPlusMedical as DefaultIcon } from "react-icons/bi";
import { RiStethoscopeFill as DiagnosisIcon } from "react-icons/ri";
import { FaSearch as FindingsIcon } from "react-icons/fa";
import { FaUserNurse as ProceduresIcon } from "react-icons/fa";
import { FaBed as SymptomsIcon } from "react-icons/fa";

// Import: Elements
import {
  Arrow,
  ArrowContainer,
  Container,
  Detail,
  EntryContainer,
  Header,
  Heading,
  Icon,
  Left,
  Right,
  Status,
  StyledModal,
  Wrapper,
} from "./ReportEntry.elements";
import "./ReportEntry.styles.css";

// Import: Components
import { Button, PageTitle, ReportSection } from "../index";

// Component: ReportEntry
export default function ReportEntry({
  alerts,
  allergies,
  complaint,
  complications,
  details,
  diagnosis,
  findings,
  icon,
  openedModal,
  procedures,
  symptoms,
  themeColor,
  type,
  status,
}) {
  // State: Local state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // onClick: Functions for opening and closing the modal
  function openModal() {
    setIsModalOpen((isModalOpen) => !isModalOpen);
  }
  function closeModal() {
    setIsModalOpen((isModalOpen) => !isModalOpen);
  }

  return (
    <Container data-testid={"reportEntry"}>
      <Wrapper
        alerts={alerts}
        allergies={allergies}
        complaint={complaint}
        complications={complications}
        diagnosis={diagnosis}
        findings={findings}
        onClick={openModal}
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
            style={{ background: `${themeColor}` }}
            symptoms={symptoms}
          >
            <Arrow>
              <ArrowIcon />
            </Arrow>
          </ArrowContainer>
        </EntryContainer>
      </Wrapper>

      <StyledModal
        ariaHideApp={false}
        className="Modal"
        closeTimeoutMS={100}
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
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        overlayClassName="Overlay"
      >
        <Header>
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

          <Button onClick={closeModal} text="Close" />
        </Header>

        <ReportSection content={openedModal} />
      </StyledModal>
    </Container>
  );
}
