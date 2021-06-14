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
  TestGridWrapper,
  Wrapper,
  WrapperItem1,
  WrapperItem2,
  OverFlowWrapper,
} from "./PatientDemographics.elements";

// Import: Components, Pages
import { Button, Display, Grid } from "../../components";
import { Overview } from "../../pages";

export default function PatientDemographics({ summary }) {
  // Redux: useSelector
  const patientData = useSelector((state) => {
    if (state.selectedPatient.patientData) {
      return state.selectedPatient.patientData;
    }
  });

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
