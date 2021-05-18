// Import: Packages
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./Referral.elements";

// Import: Components
import { Form, Grid } from "../../../../components";

// SubPage: Referral
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
                  <Form.Dropdown
                    htmlFor="associateReferral"
                    labelText="Associate Referral"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="adminCategory"
                    labelText="Admin Category"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="serviceTypeRequested"
                    labelText="Service Type Requested"
                  />
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="referralPriority"
                    labelText="Referral Priority"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="referredToType"
                    labelText="Referred to Type"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.AutoSuggest
                    htmlFor="careProvider"
                    labelText="Care Provider"
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
