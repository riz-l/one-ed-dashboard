// Import: Packages
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./Notes.elements";

// Import: Components
import { Form, Grid, Text } from "../../../../components";

// SubPage: Notes
export default function Notes() {
  return (
    <>
      <Container data-testid={"notes"}>
        <Wrapper>
          <Text as="h2" heading>
            Notes
          </Text>

          <Form>
            <Grid>
              <Grid.Column>
                <Grid.Item>
                  <Form.TextArea
                    htmlFor="enterObservationNote"
                    labelText="Enter observation note..."
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
