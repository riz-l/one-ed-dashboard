// Import: Packages
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./DecisionToAdmit.elements";

// Import: Components
import { Form, Grid } from "../../../../components";

// SubPage: DecisionToAdmit
export default function DecisionToAdmit() {
  return (
    <>
      <Container data-testid={"decisionToAdmit"}>
        <Wrapper>
          <Form>
            <Form.Text as="h2" heading>
              Decision To Admit
            </Form.Text>

            <Grid>
              <Grid.Column>
                <Grid.Item>
                  <Form.Input
                    htmlFor="decisionToAdmitDate"
                    labelText="Decision to Admit Date"
                    type="date"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="decisionToAdmitTime"
                    labelText="Decision to Admit Time"
                    type="time"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="requestedBy"
                    labelText="Requested By"
                  />
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="bedCategory"
                    labelText="Bed Category"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.AutoSuggest htmlFor="specialty" labelText="Specialty" />
                </Grid.Item>

                <Grid.Item>
                  <Form.TextArea
                    cols="20"
                    htmlFor="additionalInformation"
                    labelText="Additional Information"
                    rows="5"
                  />
                </Grid.Item>
              </Grid.Column>
            </Grid>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
}
