// Import: Packages
import React, { useState } from "react";
import ReactModal from "react-modal";
import { useSelector } from "react-redux";

// Import: Utils
import { capitalizeFirstLetter } from "../../../utils/capitalizeFirstLetter";

// Import: Assets
import { ReactComponent as UserIcon } from "../../../assets/img/icon/user.svg";
import {
  ClickableButton,
  ClickableButtonContainer,
  ClickableContent,
  ClickableHeader,
  ClickableText,
  Container,
  ModalButtonWrapper,
  ModalTopWrapper,
  SVGContainer,
  Wrapper,
  TestGridWrapper,
  WrapperItem1,
  WrapperItem2,
  OverFlowWrapper,
} from "./PatientDemographics.elements";

// Import: Components
import { Button } from "../index";
import { Display, Grid } from "../../components";
import { Overview } from "../../pages/index";

export default function PatientDemographics({ summary }) {
  // Redux: Extracts Patient Data from the global state
  const patientData = useSelector((state) => state.selectedPatient.patientData);

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
    <Container data-testid={"patientDemographics"}>
      <Wrapper>
        <ClickableHeader>
          <SVGContainer>
            <UserIcon />
          </SVGContainer>

          <ClickableContent>
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

              {summary ? null : (
                <>
                  <TestGridWrapper>
                    <WrapperItem1>
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
                  </TestGridWrapper>
                </>
              )}
            </ClickableText>

            <ClickableButtonContainer>
              <ClickableButton onClick={openModal}>
                <p>View Details</p>
              </ClickableButton>
            </ClickableButtonContainer>
          </ClickableContent>
        </ClickableHeader>
      </Wrapper>

      <ReactModal
        isOpen={isModalOpen}
        contentLabel="Patient Demographics"
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="Overlay"
        closeTimeoutMS={100}
        ariaHideApp={false}
      >
        <OverFlowWrapper>
          <ModalTopWrapper>
            <ModalButtonWrapper>
              <Button text="Close" onClick={closeModal} />
            </ModalButtonWrapper>
          </ModalTopWrapper>

          <Overview />
        </OverFlowWrapper>
      </ReactModal>
    </Container>
  );
}
