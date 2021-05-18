// Import: Packages
import React, { useState } from "react";
import ReactModal from "react-modal";
import { useSelector } from "react-redux";

// Import: Assets
import { ReactComponent as UserIcon } from "../../../assets/img/icon/user.svg";

// Import: Elements
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
import "./PatientDemographics.styles.css";

// Import: Components
import { Button, Text } from "../index";
import { Display, Form, Grid } from "../../components";

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

  // Redux: Extracts Patient Name from the global state
  const patientName = useSelector(
    (state) => state.selectedPatient.patientData[0].name
  );

  // Redux: Extracts Patient Gender from the global state
  const patientGender = useSelector(
    (state) => state.selectedPatient.patientData[0].gender
  );

  // Redux: Extracts Patient Age from the global state
  const patientAge = useSelector(
    (state) => state.selectedPatient.patientData[0].age
  );

  // Redux: Extracts Patient NHSNo from the global state
  const patientNHSNo = useSelector(
    (state) => state.selectedPatient.patientData[0].NHSNo
  );

  // Redux: Extracts Patient Presenting Complaint from the global state
  const patientPresentingComplaint = useSelector(
    (state) => state.selectedPatient.patientData[0].diagnosis
  );

  // Redux: Extracts Patient D.O.B. from the global state
  const patientDob = useSelector(
    (state) => state.selectedPatient.patientData[0].dob
  );

  // Redux: Extracts Patient Ethnicity from the global state
  const patientEthnicity = useSelector(
    (state) => state.selectedPatient.patientData[0].ethnicity
  );

  // Redux: Extracts Patient ID from the global state
  const patientID = useSelector(
    (state) => state.selectedPatient.patientData[0].patientID
  );

  // Redux: Extracts Patient Address Line One from the global state
  const patientAddressOne = useSelector(
    (state) => state.selectedPatient.patientData[0].add1
  );

  // Redux: Extracts Patient Address Line Two from the global state
  const patientAddressTwo = useSelector(
    (state) => state.selectedPatient.patientData[0].add2
  );

  // Redux: Extracts Patient Address Line Three from the global state
  const patientAddressThree = useSelector(
    (state) => state.selectedPatient.patientData[0].add3
  );

  // Redux: Extracts Patient Address Line Four (postcode) from the global state
  const patientAddressFour = useSelector(
    (state) => state.selectedPatient.patientData[0].postcode
  );

  // Redux: Extracts Patient Home Phone Number from the global state
  const patientTelecom1 = useSelector(
    (state) => state.selectedPatient.patientData[0].telecom1
  );

  // Redux: Extracts Patient Mobile Phone Number from the global state
  const patientTelecom2 = useSelector(
    (state) => state.selectedPatient.patientData[0].telecom2
  );

  // Redux: Extracts Patient Other Phone Number from the global state
  const patientTelecom3 = useSelector(
    (state) => state.selectedPatient.patientData[0].telecom3
  );

  // Redux: Extracts Patient Email from the global state
  const patientTelecom4 = useSelector(
    (state) => state.selectedPatient.patientData[0].telecom4
  );

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
                {patientName === "undefined"
                  ? "N/A"
                  : patientName
                  ? patientName
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
                    {patientGender === "undefined"
                      ? "N/A"
                      : patientGender
                      ? patientGender
                      : "N/A"}
                  </Display>

                  <Display
                    left
                    margin="0 0 0 0"
                    htmlFor="modalAge"
                    labelText="Age: "
                    type="text"
                  >
                    {patientAge === "undefined"
                      ? "N/A"
                      : patientAge
                      ? patientAge
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
                    {patientNHSNo === "undefined"
                      ? "N/A"
                      : patientNHSNo
                      ? patientNHSNo
                      : "N/A"}
                  </Display>

                  <Display
                    left
                    margin="0 0 0 0"
                    htmlFor="modalPresentingComplaint"
                    labelText="Presenting Complaint: "
                    type="text"
                  >
                    {patientPresentingComplaint === "undefined"
                      ? "N/A"
                      : patientPresentingComplaint
                      ? patientPresentingComplaint
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
                {patientName === "undefined"
                  ? "N/A"
                  : patientName
                  ? patientName
                  : "N/A"}
              </h2>

              <Grid>
                <Grid.Column>
                  <Display htmlFor="gender" margin="0" type="text" left>
                    {patientGender === "undefined"
                      ? "N/A"
                      : patientGender
                      ? patientGender
                      : "N/A"}
                  </Display>

                  <Display htmlFor="age" type="text" left padding="0 0 1rem 0">
                    {patientAge ? patientAge : "N/A"}
                  </Display>

                  <Display
                    htmlFor="dateOfBirth"
                    labelText="Date of Birth"
                    type="text"
                  >
                    {patientDob === "undefined"
                      ? "N/A"
                      : patientDob
                      ? patientDob
                      : "N/A"}
                  </Display>

                  <Display htmlFor="nhsNo" labelText="NHS No." type="text">
                    {patientNHSNo === "undefined"
                      ? "N/A"
                      : patientNHSNo
                      ? patientNHSNo
                      : "N/A"}
                  </Display>

                  <Display
                    htmlFor="ethnicity"
                    labelText="Ethnicity"
                    type="text"
                  >
                    {patientEthnicity === "undefined"
                      ? "N/A"
                      : patientEthnicity
                      ? patientEthnicity
                      : "N/A"}
                  </Display>
                </Grid.Column>

                <Grid.Column>
                  <Display
                    htmlFor="patientID"
                    labelText="Patient ID"
                    type="text"
                  >
                    {patientID === "undefined"
                      ? "N/A"
                      : patientID
                      ? patientID
                      : "N/A"}
                  </Display>

                  <Display
                    margin="0 0 0 0"
                    htmlFor="addressOne"
                    labelText="Address"
                    type="text"
                  >
                    {patientAddressOne === "undefined"
                      ? "N/A"
                      : patientAddressOne
                      ? patientAddressOne
                      : "N/A"}
                  </Display>

                  <Display htmlFor="addressTwo" type="text">
                    {patientAddressTwo === "undefined"
                      ? "N/A"
                      : patientAddressTwo
                      ? patientAddressTwo
                      : "N/A"}
                  </Display>

                  <Display htmlFor="addressThree" type="text">
                    {patientAddressThree === "undefined"
                      ? "N/A"
                      : patientAddressThree
                      ? patientAddressThree
                      : "N/A"}
                  </Display>

                  <Display htmlFor="addressFour" type="text">
                    {patientAddressFour === "undefined"
                      ? "N/A"
                      : patientAddressFour
                      ? patientAddressFour
                      : "N/A"}
                  </Display>
                </Grid.Column>

                <Grid.Column>
                  {patientTelecom1 ? (
                    <Form.Display
                      htmlFor="contactOne"
                      labelText={
                        patientTelecom1.use
                          ? patientTelecom1.use + ":"
                          : patientTelecom1.system + ":"
                      }
                    >
                      {patientTelecom1.value.split("mailto:").pop()}
                    </Form.Display>
                  ) : null}

                  {patientTelecom2 ? (
                    <Form.Display
                      htmlFor="contactTwo"
                      labelText={
                        patientTelecom2.use
                          ? patientTelecom2.use + ":"
                          : patientTelecom2.system + ":"
                      }
                    >
                      {patientTelecom2.value.split("mailto:").pop()}
                    </Form.Display>
                  ) : null}

                  {patientTelecom3 ? (
                    <Form.Display
                      htmlFor="contactThree"
                      labelText={
                        patientTelecom3.use
                          ? patientTelecom3.use + ":"
                          : patientTelecom3.system + ":"
                      }
                    >
                      {patientTelecom3.value.split("mailto:").pop()}
                    </Form.Display>
                  ) : null}
                  {patientTelecom4 ? (
                    <Form.Display
                      htmlFor="contactFour"
                      labelText={
                        patientTelecom4.use
                          ? patientTelecom4.use + ":"
                          : patientTelecom4.system + ":"
                      }
                    >
                      {patientTelecom4.value.split("mailto:").pop()}
                    </Form.Display>
                  ) : null}
                </Grid.Column>
              </Grid>
            </HeadingContent>
          </Heading>
        </FormWrapper>
      </ReactModal>
    </Container>
  );
}
