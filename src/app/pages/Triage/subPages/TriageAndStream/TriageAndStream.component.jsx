// Import: Packages
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./TriageAndStream.elements";

// Import: Components
import { Form, Grid, Text } from "../../../../components";

// SubPage: TriageAndStream
export default function TriageAndStream() {
  return (
    <>
      <Container data-testid={"triageAndStream"}>
        <Wrapper>
          <Text heading as="h2">
            Triage
          </Text>

          <Form>
            <Grid>
              <Grid.Column>
                <Grid.Item>
                  <Form.Input
                    htmlFor="Arrival Date/Time"
                    labelText="Arrival Date/Time"
                    type="text"
                  />
                </Grid.Item>
                <Grid.Item>
                  <Form.Input
                    htmlFor="Triage Date"
                    labelText="Triage Date"
                    type="text"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="Triage Time"
                    labelText="Triage Time"
                    type="text"
                  />
                </Grid.Item>
                <Grid.Item>
                  <Form.Input
                    htmlFor="Triage System"
                    labelText="Triage System"
                    type="text"
                  />
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
                <Grid.Item>
                  <Form.Input
                    htmlFor="Location"
                    labelText="Location"
                    type="text"
                  />
                </Grid.Item>
                <Grid.Item>
                  <Form.Input
                    htmlFor="Chief Complaint"
                    labelText="Chief Complaint"
                    type="text"
                  />
                </Grid.Item>
                <Grid.Item>
                  <Form.Input
                    htmlFor="Triage Category"
                    labelText="Triage Category"
                    type="text"
                  />
                </Grid.Item>
              </Grid.Column>
              <Grid.Column>
                <Grid.Item>
                  <Form.Input
                    htmlFor="Triage By"
                    labelText="Triage By"
                    type="text"
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
