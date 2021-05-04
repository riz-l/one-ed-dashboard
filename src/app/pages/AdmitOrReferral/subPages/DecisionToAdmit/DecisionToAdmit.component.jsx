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
                  <Form.Input type="date" labelText="Decision to Admit Date" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input type="time" labelText="Decision to Admit Time" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown labelText="Requested By" />
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
                <Grid.Item>
                  <Form.Dropdown labelText="Bed Category" />
                </Grid.Item>

                <Grid.Item>
                  <Form.AutoSuggest labelText="Specialty" />
                </Grid.Item>

                <Grid.Item>
                  <Form.TextArea
                    labelText="Additional Information"
                    cols="20"
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
