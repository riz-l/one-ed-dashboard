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
                      htmlFor="Last Updated"
                      labelText="Last Updated"
                    />
                  </Grid.Item>
                  <Grid.Item>
                    <Form.Display htmlFor="Identifier" labelText="Identifier" />
                  </Grid.Item>
                  <Grid.Item>
                    <Form.Display
                      htmlFor="Department ID"
                      labelText="Department ID"
                    />
                  </Grid.Item>
                  <Grid.Item>
                    <Form.Display htmlFor="Pas No." labelText="Pas No." />
                  </Grid.Item>
                  <Grid.Item>
                    <Form.Display
                      htmlFor="Family Name"
                      labelText="Family Name"
                    />
                  </Grid.Item>
                  <Grid.Item>
                    <Form.Display htmlFor="Given Name" labelText="Given Name" />
                  </Grid.Item>
                  <Grid.Item>
                    <Form.Display htmlFor="Prefix" labelText="Prefix" />
                  </Grid.Item>
                </Grid.Column>

                <Grid.Column>
                  <Grid.Item>
                    <Form.Display htmlFor="Phone" labelText="Phone" />
                    <Form.Display htmlFor="Phone" type="text" />
                    <Form.Display htmlFor="Phone" type="text" />
                    <Form.Display htmlFor="Gender" labelText="Gender" />
                  </Grid.Item>
                  <Grid.Item>
                    <Form.Display
                      htmlFor="Date of Birth"
                      labelText="Date of Birth"
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
                    <Form.Display htmlFor="Address" labelText="Address" />
                    <Form.Display htmlFor="Address" type="text" />
                    <Form.Display htmlFor="Address" type="text" />
                    <Form.Display htmlFor="Address" type="text" />
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
                    <Form.Display htmlFor="GP" labelText="GP" type="text" />
                    <Form.Display htmlFor="GP" type="text" />
                    <Form.Display htmlFor="GP" type="text" />
                    <Form.Display htmlFor="GP" type="text" />
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
