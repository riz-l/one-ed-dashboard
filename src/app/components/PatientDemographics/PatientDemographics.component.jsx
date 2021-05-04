// Import: Packages
import React, { useState } from "react";
import ReactModal from "react-modal";

// Import: Assets
import { ReactComponent as InformationIcon } from "../../../assets/img/icon/information.svg";

// Import: Elements
import {
  Container,
  FormWrapper,
  Header,
  Wrapper,
} from "./PatientDemographics.elements";
import "./PatientDemographics.styles.css";

// Import: Components
import { Button, Text } from "../index";
import { Form, Grid } from "../../components";

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
          <Header onClick={openModal}>
            <InformationIcon />
            <h3>Patient Demographics</h3>
          </Header>
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
            <Text heading as="h3">
              Patient Demographics
            </Text>

            <Button text="Close" onClick={closeModal} />

            <Form>
              <Grid>
                <Grid.Column>
                  <Grid.Item>
                    <Form.Display
                      htmlFor="nhsNo"
                      labelText="NHS No."
                      type="text"
                    >
                      Placeholder NHS No.
                    </Form.Display>
                  </Grid.Item>

                  <Grid.Item>
                    <Form.Input
                      htmlFor="pasNo"
                      labelText="PAS No."
                      type="text"
                    />
                  </Grid.Item>

                  <Grid.Item>
                    <Form.Input htmlFor="name" labelText="Name" type="text" />
                  </Grid.Item>

                  <Grid.Item>
                    <Form.Input
                      htmlFor="prefix"
                      labelText="Prefix"
                      type="text"
                    />
                  </Grid.Item>
                </Grid.Column>

                <Grid.Column>
                  <Grid.Item>
                    <Form.Input
                      htmlFor="phoneOne"
                      labelText="Phone"
                      type="text"
                    />
                    <Form.Input htmlFor="phoneTwo" type="text" />
                    <Form.Input htmlFor="phoneThree" type="text" />
                    <Form.Input
                      htmlFor="gender"
                      labelText="Gender"
                      type="text"
                    />
                  </Grid.Item>

                  <Grid.Item>
                    <Form.Input
                      htmlFor="dateOfBirth"
                      labelText="Date of Birth"
                      type="text"
                    />
                  </Grid.Item>
                </Grid.Column>

                <Grid.Column>
                  <Grid.Item>
                    <Form.Input
                      htmlFor="addressOne"
                      labelText="Address"
                      type="text"
                    />
                    <Form.Input htmlFor="addressTwo" type="text" />
                    <Form.Input htmlFor="addressThree" type="text" />
                    <Form.Input htmlFor="addressFour" type="text" />
                  </Grid.Item>

                  <Grid.Item>
                    <Form.Input
                      htmlFor="postcode"
                      labelText="Postcode"
                      type="text"
                    />
                  </Grid.Item>
                </Grid.Column>
              </Grid>
            </Form>
          </FormWrapper>
        </ReactModal>
      </Container>
    </>
  );
}
