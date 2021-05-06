// Import: Packages
import React from "react";
import { useSelector } from "react-redux";

// Import: Elements
import { Container, Wrapper } from "./Details.elements";

// Import: Components
import { Form, Grid, Text } from "../../../../components";

// SubPage: Details
export default function Details() {
  // Redux: Fetches patientData and patientDemographics from the global state
  const patientData = useSelector((state) => state.selectedPatient.patientData);
  const patientDemographics = useSelector(
    (state) => state.selectedPatient.patientDemographics
  );

  return (
    <>
      <Container data-testid={"details"}>
        <Wrapper>
          <Text heading as="h2">
            Details
          </Text>

          <Form>
            <Grid>
              <Grid.Column>
                <Grid.Item>
                  <Form.Display htmlFor="name" labelText="Name">
                    {patientData[0].name && patientData[0].name}
                  </Form.Display>
                </Grid.Item>

                <Grid.Item>
                  <Form.Display htmlFor="dateOfBirth" labelText="Date of Birth">
                    {patientData[0].dob && patientData[0].dob}
                  </Form.Display>
                </Grid.Item>

                <Grid.Item>
                  <Form.Display htmlFor="ethnicity" labelText="Ethnicity">
                    {patientDemographics.ethnicity &&
                      patientDemographics.ethnicity}
                  </Form.Display>
                </Grid.Item>

                <Grid.Item>
                  <Form.Display htmlFor="gender" labelText="Gender">
                    {patientData[0].gender && patientData[0].gender}
                  </Form.Display>
                </Grid.Item>

                <Grid.Item>
                  <Form.Display htmlFor="patientID" labelText="Patient ID">
                    {patientData[0].patientID && patientData[0].patientID}
                  </Form.Display>
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
                <Grid.Item>
                  <Form.Display htmlFor="addressLineOne" labelText="Address">
                    {patientData[0].add1 && patientData[0].add1}
                  </Form.Display>
                  <Form.Display htmlFor="addressLineTwo">
                    {patientData[0].add2 && patientData[0].add2}
                  </Form.Display>
                  <Form.Display htmlFor="addressLineThree">
                    {patientData[0].add3 && patientData[0].add3}
                  </Form.Display>
                  <Form.Display htmlFor="addressPostcode">
                    {patientData[0].postcode && patientData[0].postcode}
                  </Form.Display>
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
                <Grid.Item>
                  {patientData[0].telecom1 ? (
                    <Form.Display htmlFor="contactOne" labelText="Contact 1">
                      {patientData[0].telecom1}
                    </Form.Display>
                  ) : null}
                </Grid.Item>

                <Grid.Item>
                  {patientData[0].telecom2 ? (
                    <Form.Display htmlFor="contactTwo" labelText="Contact 2">
                      {patientData[0].telecom2}
                    </Form.Display>
                  ) : null}
                </Grid.Item>

                <Grid.Item>
                  {patientData[0].telecom3 ? (
                    <Form.Display htmlFor="contactThree" labelText="Contact 3">
                      {patientData[0].telecom3}
                    </Form.Display>
                  ) : null}
                </Grid.Item>

                <Grid.Item>
                  {patientData[0].telecom4 ? (
                    <Form.Display htmlFor="contactFour" labelText="Contact 4">
                      {patientData[0].telecom4}
                    </Form.Display>
                  ) : null}
                </Grid.Item>
              </Grid.Column>
            </Grid>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
}
