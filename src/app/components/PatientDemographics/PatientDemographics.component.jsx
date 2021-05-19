// Import: Packages
import React, { useState } from "react";
import ReactModal from "react-modal";
import { useSelector } from "react-redux";

// Import: Assets
import { ReactComponent as UserIcon } from "../../../assets/img/icon/user.svg";
import {
  ClickableButton,
  ClickableButtonContainer,
  ClickableContent,
  ClickableHeader,
  ClickableText,
  Container,
  FormWrapper,
  Heading,
  HeadingContent,
  HeadingImage,
  ModalButtonWrapper,
  ModalTopWrapper,
  SVGContainer,
  Wrapper,
} from "./PatientDemographics.elements";

// Import: Components
import { Button, Text } from "../index";
import { Display, Grid } from "../../components";

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

  // Redux: Extracts Patient Data from the global state
  const patientData = useSelector((state) => state.selectedPatient.patientData);

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
                {patientData[0].name === "undefined"
                  ? "N/A"
                  : patientData[0].name
                  ? patientData[0].name
                  : "N/A"}
              </h2>

              <Grid>
                <Grid.Item>
                  <Display
                    left
                    margin="0 0 0 0"
                    htmlFor="modalGender"
                    labelText="Gender:"
                    type="text"
                  >
                    {patientData[0].gender === "undefined"
                      ? "N/A"
                      : patientData[0].gender
                      ? patientData[0].gender
                      : "N/A"}
                  </Display>

                  <Display
                    left
                    margin="0 0 0 0"
                    htmlFor="modalAge"
                    labelText="Age: "
                    type="text"
                  >
                    {patientData[0].age === "undefined"
                      ? "N/A"
                      : patientData[0].age
                      ? patientData[0].age
                      : "N/A"}
                  </Display>
                </Grid.Item>

                <Grid.Item>
                  <Display
                    left
                    margin="0 0 0 0"
                    htmlFor="modalNhsNo"
                    labelText="NHS No: "
                    type="text"
                  >
                    {patientData[0].NHSNo === "undefined"
                      ? "N/A"
                      : patientData[0].NHSNo
                      ? patientData[0].NHSNo
                      : "N/A"}
                  </Display>

                  <Display
                    left
                    margin="0 0 0 0"
                    htmlFor="modalPresentingComplaint"
                    labelText="Presenting Complaint: "
                    type="text"
                  >
                    {patientData[0].diagnosis === "undefined"
                      ? "N/A"
                      : patientData[0].diagnosis
                      ? patientData[0].diagnosis
                      : "N/A"}
                  </Display>
                </Grid.Item>
              </Grid>
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
        <FormWrapper>
          <ModalTopWrapper>
            <Text heading as="h3">
              Patient Demographics
            </Text>

            <ModalButtonWrapper>
              <Button text="Close" onClick={closeModal} />
            </ModalButtonWrapper>
          </ModalTopWrapper>

          <Heading>
            <HeadingImage>
              <UserIcon />
            </HeadingImage>

            <HeadingContent>
              <h2>
                {patientData[0].name === "undefined"
                  ? "N/A"
                  : patientData[0].name
                  ? patientData[0].name
                  : "N/A"}
              </h2>

              <Grid>
                <Grid.Column>
                  <Display htmlFor="gender" margin="0" type="text" left>
                    {patientData[0].gender === "undefined"
                      ? "N/A"
                      : patientData[0].gender
                      ? patientData[0].gender
                      : "N/A"}
                  </Display>

                  <Display htmlFor="age" type="text" left padding="0 0 1rem 0">
                    {patientData[0].age === "undefined"
                      ? "N/A"
                      : patientData[0].age
                      ? patientData[0].age
                      : "N/A"}
                  </Display>

                  <Display
                    htmlFor="dateOfBirth"
                    labelText="Date of Birth"
                    type="text"
                  >
                    {patientData[0].dob === "undefined"
                      ? "N/A"
                      : patientData[0].dob
                      ? patientData[0].dob
                      : "N/A"}
                  </Display>

                  <Display htmlFor="nhsNo" labelText="NHS No." type="text">
                    {patientData[0].NHSNo === "undefined"
                      ? "N/A"
                      : patientData[0].NHSNo
                      ? patientData[0].NHSNo
                      : "N/A"}
                  </Display>

                  <Display
                    htmlFor="ethnicity"
                    labelText="Ethnicity"
                    type="text"
                  >
                    {patientData[0].ethnicity === "undefined"
                      ? "N/A"
                      : patientData[0].ethnicity
                      ? patientData[0].ethnicity
                      : "N/A"}
                  </Display>
                </Grid.Column>

                <Grid.Column>
                  <Display
                    htmlFor="patientID"
                    labelText="Patient ID"
                    type="text"
                  >
                    {patientData[0].patientID === "undefined"
                      ? "N/A"
                      : patientData[0].patientID
                      ? patientData[0].patientID
                      : "N/A"}
                  </Display>

                  <Display
                    margin="0 0 0 0"
                    htmlFor="addressOne"
                    labelText="Address"
                    type="text"
                  >
                    {patientData[0].add1 === "undefined"
                      ? "N/A"
                      : patientData[0].add1
                      ? patientData[0].add1
                      : "N/A"}
                  </Display>

                  <Display htmlFor="addressTwo" type="text">
                    {patientData[0].add2 === "undefined"
                      ? "N/A"
                      : patientData[0].add2
                      ? patientData[0].add2
                      : "N/A"}
                  </Display>

                  <Display htmlFor="addressThree" type="text">
                    {patientData[0].add3 === "undefined"
                      ? "N/A"
                      : patientData[0].add3
                      ? patientData[0].add3
                      : "N/A"}
                  </Display>

                  <Display htmlFor="addressFour" type="text">
                    {patientData[0].add4 === "undefined"
                      ? "N/A"
                      : patientData[0].add4
                      ? patientData[0].add4
                      : "N/A"}
                  </Display>
                </Grid.Column>

                <Grid.Column>
                  <Grid.Item>
                    {patientData[0].telecom1 ? (
                      <Display
                        htmlFor="contactOne"
                        labelText={
                          patientData[0].telecom1.use
                            ? patientData[0].telecom1.use + ":"
                            : patientData[0].telecom1.system + ":"
                        }
                      >
                        {patientData[0].telecom1.value.split("mailto:").pop()}
                      </Display>
                    ) : null}
                  </Grid.Item>

                  <Grid.Item>
                    {patientData[0].telecom2 ? (
                      <Display
                        htmlFor="contactOne"
                        labelText={
                          patientData[0].telecom2.use
                            ? patientData[0].telecom2.use + ":"
                            : patientData[0].telecom2.system + ":"
                        }
                      >
                        {patientData[0].telecom2.value.split("mailto:").pop()}
                      </Display>
                    ) : null}
                  </Grid.Item>

                  <Grid.Item>
                    {patientData[0].telecom3 ? (
                      <Display
                        htmlFor="contactOne"
                        labelText={
                          patientData[0].telecom3.use
                            ? patientData[0].telecom3.use + ":"
                            : patientData[0].telecom3.system + ":"
                        }
                      >
                        {patientData[0].telecom3.value.split("mailto:").pop()}
                      </Display>
                    ) : null}
                  </Grid.Item>

                  <Grid.Item>
                    {patientData[0].telecom4 ? (
                      <Display
                        htmlFor="contactOne"
                        labelText={
                          patientData[0].telecom4.use
                            ? patientData[0].telecom4.use + ":"
                            : patientData[0].telecom4.system + ":"
                        }
                      >
                        {patientData[0].telecom4.value.split("mailto:").pop()}
                      </Display>
                    ) : null}
                  </Grid.Item>
                </Grid.Column>
              </Grid>
            </HeadingContent>
          </Heading>
        </FormWrapper>
      </ReactModal>
    </Container>
  );
}
