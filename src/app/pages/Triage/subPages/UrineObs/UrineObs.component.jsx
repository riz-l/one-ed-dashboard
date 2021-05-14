// Import: Packages
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./UrineObs.elements";

// Import: Components
import { Form, Grid } from "../../../../components";

// SubPage: UrineObs
export default function UrineObs() {
  return (
    <>
      <Container data-testid={"urineObs"}>
        <Wrapper>
          <Form>
            <Form.Text as="h2" heading>
              Urine Obs
            </Form.Text>

            <Grid>
              <Grid.Column>
                <Grid.Item>
                  <Form.Checkbox htmlFor="nAD" text="NAD" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown htmlFor="pro" labelText="Pro" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown htmlFor="bld" labelText="Bld" />
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
                <Grid.Item>
                  <Form.Dropdown htmlFor="glu" labelText="Glu" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown htmlFor="leu" labelText="Leu" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown htmlFor="nit" labelText="Nit" />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown htmlFor="ket" labelText="Ket" />
                </Grid.Item>
              </Grid.Column>
            </Grid>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
}
