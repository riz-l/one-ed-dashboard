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
                    <Form.Input
                      htmlFor="Last Updated"
                      labelText="Last Updated"
                      type="text"
                    />
                  </Grid.Item>
                  <Grid.Item>
                    <Form.Input
                      htmlFor="Identifier"
                      labelText="Identifier"
                      type="text"
                    />
                  </Grid.Item>
                  <Grid.Item>
                    <Form.Input
                      htmlFor="Department ID"
                      labelText="Department ID"
                      type="text"
                    />
                  </Grid.Item>
                  <Grid.Item>
                    <Form.Input
                      htmlFor="Pas No."
                      labelText="Pas No."
                      type="text"
                    />
                  </Grid.Item>
                  <Grid.Item>
                    <Form.Input
                      htmlFor="Family Name"
                      labelText="Family Name"
                      type="text"
                    />
                  </Grid.Item>
                  <Grid.Item>
                    <Form.Input
                      htmlFor="Given Name"
                      labelText="Given Name"
                      type="text"
                    />
                  </Grid.Item>
                  <Grid.Item>
                    <Form.Input
                      htmlFor="Prefix"
                      labelText="Prefix"
                      type="text"
                    />
                  </Grid.Item>
                </Grid.Column>

                <Grid.Column>
                  <Grid.Item>
                    <Form.Input htmlFor="Phone" labelText="Phone" type="text" />
                    <Form.Input htmlFor="Phone" type="text" />
                    <Form.Input htmlFor="Phone" type="text" />
                    <Form.Input
                      htmlFor="Gender"
                      labelText="Gender"
                      type="text"
                    />
                  </Grid.Item>
                  <Grid.Item>
                    <Form.Input
                      htmlFor="Date of Birth"
                      labelText="Date of Birth"
                      type="text"
                    />
                  </Grid.Item>
                  <Grid.Item>
                    <Form.Text as="h3" subheading>
                      Deceased?
                    </Form.Text>
                    <Form.Radio text="True" />
                    <Form.Radio text="False" />
                  </Grid.Item>
                </Grid.Column>

                <Grid.Column>
                  <Grid.Item>
                    <Form.Input
                      htmlFor="Address"
                      labelText="Address"
                      type="text"
                    />
                    <Form.Input htmlFor="Address" type="text" />
                    <Form.Input htmlFor="Address" type="text" />
                    <Form.Input htmlFor="Address" type="text" />
                  </Grid.Item>
                  <Grid.Item>
                    <Form.Text as="h3" subheading>
                      Multiple Births?
                    </Form.Text>
                  </Grid.Item>

                  <Grid.Item>
                    <Form.Radio text="True" />
                    <Form.Radio text="False" />
                  </Grid.Item>
                  <Grid.Item>
                    <Form.Input htmlFor="GP" labelText="GP" type="text" />
                    <Form.Input htmlFor="GP" type="text" />
                    <Form.Input htmlFor="GP" type="text" />
                    <Form.Input htmlFor="GP" type="text" />
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
