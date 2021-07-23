// Import: Packages
import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import { useSelector } from "react-redux";

// Import: Utils
import { capitalizeFirstLetter } from "../../../utils/capitalizeFirstLetter";

// Import: Assets
import { ReactComponent as UserIcon } from "../../../assets/img/icon/user.svg";
import { MdKeyboardArrowRight as ArrowIcon } from "react-icons/md";
import {
  DataAndArrowWrapper,
  Arrow,
  ArrowContainer,
  ClickableButton,
  ClickableText,
  Container,
  ContentWrapper,
  ModalButtonWrapper,
  ModalTopWrapper,
  TestGridWrapper,
  WrapperItem1,
  WrapperItem2,
  OverFlowWrapper,
  NewWrapper,
  NewSVGSection,
  NewDataSection,
  NewButtonSection,
  NewClickableLayer,
} from "./PatientDemographics.elements";

// Import: Components, Pages
import { Button, Display, Grid } from "../../components";
import { Overview } from "../../pages";
import { GiCondorEmblem } from "react-icons/gi";

export default function PatientDemographics({ summary }) {
  // Redux: useSelector
  const patientData = useSelector((state) => {
    if (state.selectedPatient.patientData) {
      return state.selectedPatient.patientData;
    }
  });

  // State: Local state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Effect: media queries
  useEffect(() => {
    function updateWindowDimensions() {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);
    }
    window.addEventListener("resize", updateWindowDimensions);
    console.log("windowWidth", windowWidth);
  }, [windowWidth]);

  // onClick: Functions for opening and closing the modal
  function openModal() {
    setIsModalOpen((isModalOpen) => !isModalOpen);
  }
  function closeModal() {
    setIsModalOpen((isModalOpen) => !isModalOpen);
  }

  return (
    <Container data-testid={"patientDemographics"}>
      <ContentWrapper>
        <DataAndArrowWrapper>
          <ArrowContainer>
            <Arrow>
              <ArrowIcon />
            </Arrow>
          </ArrowContainer>
          <NewWrapper
            onClick={windowWidth <= 1440 ? openModal : null}
            summary={summary}
            windowWidth={windowWidth}
          >
            {summary ? null : (
              <>
                <NewSVGSection>
                  <UserIcon />
                </NewSVGSection>
              </>
            )}

            <NewDataSection summary={summary}>
              <ClickableText>
                <h2>
                  {patientData && patientData.length > 0
                    ? patientData[0].name === "undefined"
                      ? "N/A"
                      : patientData[0].name
                      ? capitalizeFirstLetter(patientData[0].name)
                      : "N/A"
                    : "N/A"}
                </h2>

                <TestGridWrapper>
                  <WrapperItem1 summary={summary}>
                    <Grid>
                      <Grid.Item>
                        <Display
                          left
                          margin="0 0 0 0"
                          htmlFor="modalGender"
                          labelText="Gender:"
                        >
                          {patientData && patientData.length > 0 ? (
                            patientData[0].gender === "undefined" ? (
                              "N/A"
                            ) : patientData[0].gender ? (
                              <span style={{ textTransform: "capitalize" }}>
                                {patientData[0].gender}
                              </span>
                            ) : (
                              "N/A"
                            )
                          ) : (
                            "N/A"
                          )}
                        </Display>

                        <Display
                          left
                          margin="0 0 0 0"
                          htmlFor="modalAge"
                          labelText="Age: "
                          type="text"
                        >
                          {patientData && patientData.length > 0
                            ? patientData[0].age === "undefined"
                              ? "N/A"
                              : patientData[0].age
                              ? patientData[0].age
                              : "N/A"
                            : "N/A"}
                        </Display>
                      </Grid.Item>
                    </Grid>
                  </WrapperItem1>

                  {summary ? null : (
                    <>
                      <WrapperItem2>
                        <Grid>
                          <Grid.Item>
                            <Display
                              id="tylertest"
                              left
                              margin="0 0 0 0"
                              htmlFor="modalNhsNo"
                              labelText="NHS No: "
                              type="text"
                            >
                              {patientData && patientData.length > 0
                                ? patientData[0].NHSNo === "undefined"
                                  ? "N/A"
                                  : patientData[0].NHSNo
                                  ? patientData[0].NHSNo
                                  : "N/A"
                                : "N/A"}
                            </Display>

                            <Display
                              left
                              margin="0 0 0 0"
                              htmlFor="modalPresentingComplaint"
                              labelText="Presenting Complaint: "
                              type="text"
                            >
                              {patientData && patientData.length > 0
                                ? patientData[0].diagnosis === "undefined"
                                  ? "N/A"
                                  : patientData[0].diagnosis
                                  ? patientData[0].diagnosis
                                  : "N/A"
                                : "N/A"}
                            </Display>
                          </Grid.Item>
                        </Grid>
                      </WrapperItem2>

                      <NewButtonSection>
                        <ClickableButton onClick={openModal}>
                          <p>View Details</p>
                        </ClickableButton>
                      </NewButtonSection>
                    </>
                  )}
                  {summary ? (
                    <>
                      <WrapperItem2 summary={summary}>
                        <Grid>
                          <Grid.Item>
                            <Display
                              left
                              margin="0 0 0 0"
                              htmlFor="modalDiagnoss"
                              labelText="Diagnosis: "
                              type="text"
                            >
                              {patientData && patientData.length > 0
                                ? patientData[0].diagnosis === "undefined"
                                  ? "N/A"
                                  : patientData[0].diagnosis
                                  ? patientData[0].diagnosis
                                  : "N/A"
                                : "N/A"}
                            </Display>
                            <Display
                              left
                              margin="0 0 0 0"
                              htmlFor="modalPeriod"
                              labelText="Period: "
                              type="text"
                            >
                              {patientData && patientData.length > 0
                                ? patientData[0].period === "undefined"
                                  ? "N/A"
                                  : patientData[0].period
                                  ? patientData[0].period
                                  : "N/A"
                                : "N/A"}
                            </Display>
                          </Grid.Item>
                        </Grid>
                      </WrapperItem2>
                    </>
                  ) : null}
                </TestGridWrapper>
              </ClickableText>
            </NewDataSection>
          </NewWrapper>
        </DataAndArrowWrapper>
      </ContentWrapper>

      {/* </NewClickableLayer> */}
      <ReactModal
        ariaHideApp={false}
        className="Modal"
        closeTimeoutMS={100}
        contentLabel="Patient Demographics"
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        overlayClassName="Overlay"
      >
        <OverFlowWrapper>
          <ModalTopWrapper>
            <ModalButtonWrapper>
              <Button onClick={closeModal} text="Close" />
            </ModalButtonWrapper>
          </ModalTopWrapper>

          <Overview />
        </OverFlowWrapper>
      </ReactModal>
    </Container>
  );
}
