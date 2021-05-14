// Import: Packages
import React, { useState } from "react";
import ReactModal from "react-modal";

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
import { Display, Grid } from "../../components";

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

  return (
    <>
      <Container data-testid={"patientDemographics"}>
        <Wrapper>
          <ClickableHeader>
            <SVGContainer>
              <UserIcon />
            </SVGContainer>

            <ClickableContent>
              <ClickableText>
                <h2>Mark Rearden</h2>

                <Grid>
                  <Grid.Item>
                    <Display
                      left
                      margin="0 0 0 0"
                      htmlFor="modalGender"
                      labelText="Gender:"
                      type="text"
                    >
                      Male
                    </Display>

                    <Display
                      left
                      margin="0 0 0 0"
                      htmlFor="modalAge"
                      labelText="Age:"
                      type="text"
                    >
                      37 Years 5 Months
                    </Display>
                  </Grid.Item>

                  <Grid.Item>
                    <Display
                      left
                      margin="0 0 0 0"
                      htmlFor="modalNhsNo"
                      labelText="NHS No:"
                      type="text"
                    >
                      255-556-666
                    </Display>

                    <Display
                      left
                      margin="0 0 0 0"
                      htmlFor="modalPresentingComplaint"
                      labelText="Presenting Complaint:"
                      type="text"
                    >
                      Fever
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
                <UserIcon></UserIcon>
              </HeadingImage>

              <HeadingContent>
                <h2>Mark Rearden</h2>

                <Grid>
                  <Grid.Column>
                    <Display htmlFor="gender" margin="0" type="text" left>
                      Male
                    </Display>

                    <Display
                      htmlFor="age"
                      type="text"
                      left
                      padding="0 0 1rem 0"
                    >
                      35 Years 5 Months
                    </Display>

                    <Display
                      htmlFor="dateOfBirth"
                      labelText="Date of Birth"
                      type="text"
                    />

                    <Display htmlFor="nhsNo" labelText="NHS No." type="text" />

                    <Display
                      htmlFor="ethnicity"
                      labelText="Ethnicity"
                      type="text"
                    />
                  </Grid.Column>

                  <Grid.Column>
                    <Display
                      htmlFor="patientID"
                      labelText="Patient ID"
                      type="text"
                    >
                      70190
                    </Display>

                    <Display
                      margin="0 0 0 0"
                      htmlFor="addressOne"
                      labelText="Address"
                      type="text"
                    >
                      17 Trent Avenue
                    </Display>

                    <Display htmlFor="addressTwo" type="text">
                      Altofts
                    </Display>

                    <Display htmlFor="addressThree" type="text">
                      Normanton
                    </Display>

                    <Display htmlFor="addressFour" type="text">
                      WF6 2FT
                    </Display>
                  </Grid.Column>

                  <Grid.Column>
                    <Display htmlFor="home" labelText="Home" type="text">
                      01412789879
                    </Display>

                    <Display htmlFor="phoneOne" labelText="Phone" type="text">
                      07792076751
                    </Display>

                    <Display htmlFor="phoneTwo" type="text"></Display>

                    <Display htmlFor="phoneThree" type="text" />

                    <Display htmlFor="email" labelText="Email" type="text">
                      Mrearden@dxc.com
                    </Display>
                  </Grid.Column>
                </Grid>
              </HeadingContent>
            </Heading>
          </FormWrapper>
        </ReactModal>
      </Container>
    </>
  );
}
