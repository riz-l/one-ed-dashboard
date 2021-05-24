// Import: Packages
import React, { useState } from "react";
import ReactModal from "react-modal";

// Import: Icons
import { MdKeyboardArrowRight as ArrowIcon } from "react-icons/md";
import { ReactComponent as POPSHistoryIcon } from "../../../assets/img/icon/popsHistory.svg";
import { ReactComponent as CEDIcon } from "../../../assets/img/icon/assessments-observations.svg";
import { ReactComponent as NeuroObsIcon } from "../../../assets/img/icon/neuroObs.svg";
import { ReactComponent as UrineObsIcon } from "../../../assets/img/icon/urineObs.svg";

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
} from "./POPSHistoryModal.elements";
import "./POPSHistoryModal.styles.css";

// Import: Components and SubPages
import { Button, ReportSection, SecondaryNavigation, Text } from "../index";

import { CEDObs, NeuroObs, UrineObs } from "./SubPages";

// Component: ReportEntry
export default function POPSHistoryModal({
  // slideStatus,
  // slideToggle,
  openedModal,
}) {
  // State: isCEDObs, isNeuroObs, isUrineObs
  const [isCEDObs, setIsCEDObs] = useState(true);
  const [isNeuroObs, setIsNeuroObs] = useState(false);
  const [isUrineObs, setIsUrineObs] = useState(false);

  // onClick: Renders CEDObs
  function renderCEDObs() {
    setIsCEDObs(true);
    setIsNeuroObs(false);
    setIsUrineObs(false);
  }

  // onClick: Renders NeuroObs
  function renderNeuroObs() {
    setIsCEDObs(false);
    setIsNeuroObs(true);
    setIsUrineObs(false);
  }

  // onClick: Renders UrineObs
  function renderUrineObs() {
    setIsCEDObs(false);
    setIsNeuroObs(false);
    setIsUrineObs(true);
  }

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
    <Container data-testid={"popsHistoryModal"}>
      <Wrapper
        // onClick={
        //   slideToggle ? () => slideToggle((slideStatus) => !slideStatus) : null
        // }
        onClick={openModal}
      >
        <EntryContainer>
          <Left>
            <Heading>
              <Icon>
                <POPSHistoryIcon />
              </Icon>
              {/* Do I need this title? */}
              <h3>POPS History Results set</h3>
            </Heading>

            <Detail>
              {/* Find a way of adding the date and time from Global state. */}
              <p> 10:50 21-JAN-2021</p>
            </Detail>
          </Left>

          <Right>
            <Status>
              {/* Remove this? */}
              <p>click to open</p>
            </Status>
          </Right>

          <ArrowContainer>
            <Arrow>
              <ArrowIcon />
            </Arrow>
          </ArrowContainer>
        </EntryContainer>
      </Wrapper>

      <ReactModal
        isOpen={isModalOpen}
        contentLabel="POPS History"
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="Overlay"
        closeTimeoutMS={100}
        ariaHideApp={false}
      >
        <div
          style={{
            display: "flex",
            flexDriection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text heading as="h3">
            POPS History
          </Text>
          <Button text="Close" onClick={closeModal} />
        </div>
        {/* what does openedModal do? */}
        {openedModal}

        <ReportSection
          secondaryNavigation={
            <SecondaryNavigation>
              <SecondaryNavigation.Item
                isActive={isCEDObs ? true : false}
                onClick={renderCEDObs}
              >
                <SecondaryNavigation.Icon>
                  <CEDIcon />
                </SecondaryNavigation.Icon>
                <SecondaryNavigation.Text>CED Obs</SecondaryNavigation.Text>
              </SecondaryNavigation.Item>

              <SecondaryNavigation.Item
                isActive={isNeuroObs ? true : false}
                onClick={renderNeuroObs}
              >
                <SecondaryNavigation.Icon>
                  <NeuroObsIcon />
                </SecondaryNavigation.Icon>
                <SecondaryNavigation.Text>Neuro Obs</SecondaryNavigation.Text>
              </SecondaryNavigation.Item>

              <SecondaryNavigation.Item
                isActive={isUrineObs ? true : false}
                onClick={renderUrineObs}
              >
                <SecondaryNavigation.Icon>
                  <UrineObsIcon />
                </SecondaryNavigation.Icon>
                <SecondaryNavigation.Text>Urine Obs</SecondaryNavigation.Text>
              </SecondaryNavigation.Item>
            </SecondaryNavigation>
          }
          content={
            isCEDObs ? (
              <CEDObs />
            ) : isNeuroObs ? (
              <NeuroObs />
            ) : isUrineObs ? (
              <UrineObs />
            ) : null
          }
        />
      </ReactModal>
    </Container>
  );
}
