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
                    htmlFor="arrivalDateTime"
                    labelText="Arrival Date/Time"
                    type="text"
                  />
                </Grid.Item>
                <Grid.Item>
                  <Form.Input
                    htmlFor="triageDate"
                    labelText="Triage Date"
                    type="text"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="triageTime"
                    labelText="Triage Time"
                    type="text"
                  />
                </Grid.Item>
                <Grid.Item>
                  <Form.Input
                    htmlFor="triageSystem"
                    labelText="Triage System"
                    type="text"
                  />
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
                <Grid.Item>
                  <Form.Input
                    htmlFor="location"
                    labelText="Location"
                    type="text"
                  />
                </Grid.Item>
                <Grid.Item>
                  <Form.Input
                    htmlFor="chiefComplaint"
                    labelText="Chief Complaint"
                    type="text"
                  />
                </Grid.Item>
                <Grid.Item>
                  <Form.Input
                    htmlFor="triageCategory"
                    labelText="Triage Category"
                    type="text"
                  />
                </Grid.Item>
              </Grid.Column>
              <Grid.Column>
                <Grid.Item>
                  <Form.Input
                    htmlFor="triageBy"
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
