// Import: Packages
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./Registration.elements";

// Import: Components
import { Form, Grid } from "../../../../components";

// SubPage: Registration
export default function Registration() {
  return (
    <>
      <Container data-testid={"registration"}>
        <Wrapper>
          <Form>
            <Form.Text as="h2" heading>
              Registration
            </Form.Text>

            <Grid>
              <Grid.Column>
                <Grid.Item>
                  <Form.Input type="number" labelText="NHS Number" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input type="number" labelText="Patient ID" />
                </Grid.Item>

                {/* Should default to the current date. */}
                <Grid.Item>
                  <Form.Input type="date" labelText="Registration date" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown labelText="Title" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input labelText="Surname" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input labelText="Forename" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input labelText="Middle Name" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown labelText="Gender" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input type="date" labelText="Date of Birth" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Display
                    htmlFor="patientAge"
                    labelText="Age"
                  ></Form.Display>
                </Grid.Item>

                <Grid.Item>
                  <Form.Checkbox text="Estimated Date of Birth" />
                </Grid.Item>

                {/* Estimated date of birth may need to be a month and year dropdown. It should only be editable if the checkbox for it has been ticked.  */}
                <Grid.Item>
                  <Form.Input type="date" labelText="Date of Birth" />
                </Grid.Item>

                <Grid.Item>
                  <Form.AutoSuggest labelText="Current GP" />
                </Grid.Item>

                {/*Should default to the users healthcare organisation  */}
                <Grid.Item>
                  <Form.AutoSuggest labelText="Registered Health Organisation" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown labelText="Title" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown labelText="Title" />
                </Grid.Item>
              </Grid.Column>
            </Grid>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
}
