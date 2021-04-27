// Import: Packages
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./Referral.elements";

// Import: Components
import { Form, Grid } from "../../../../components";

// SubPage: NEWS2
export default function Referral() {
  return (
    <>
      <Container data-testid={"referral"}>
        <Wrapper>
          <Form>
            <Form.Text as="h2" heading>
              Referral
            </Form.Text>

            <Grid>
              <Grid.Column>
                <Grid.Item>
                  <Form.Dropdown labelText="Associate Referral" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown labelText="Admin Category" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown labelText="Service Type Requested" />
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
                <Grid.Item>
                  <Form.Dropdown labelText="Referral Priority" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown labelText="Referred to Type" />
                </Grid.Item>

                <Grid.Item>
                  <Form.AutoSuggest labelText="Care Provider" />
                </Grid.Item>
              </Grid.Column>
            </Grid>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
}
