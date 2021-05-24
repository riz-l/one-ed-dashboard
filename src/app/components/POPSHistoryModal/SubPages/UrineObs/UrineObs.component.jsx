// Import: Packages
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./UrineObs.elements";

// Import: Components
import { Display, Grid, Text } from "../../../../components";

// SubPage: UrineObs
export default function UrineObs() {
  return (
    <>
      <Container data-testid={"urineObs"}>
        <Wrapper>
          <Text as="h2" heading>
            Urine Obs
          </Text>

          <Grid>
            <Grid.Column>
              <Grid.Item>
                <Display htmlFor="nad" labelText="NAD">
                  {/* TODO add redux */}
                </Display>
              </Grid.Item>

              <Grid.Item>
                <Display htmlFor="pro" labelText="Pro">
                  {/* TODO add redux */}
                </Display>
              </Grid.Item>

              <Grid.Item>
                <Display htmlFor="bld" labelText="Bld">
                  {/* TODO add redux */}
                </Display>
              </Grid.Item>
            </Grid.Column>

            <Grid.Column>
              <Grid.Item>
                <Display htmlFor="glu" labelText="Glu">
                  {/* TODO add redux */}
                </Display>
              </Grid.Item>

              <Grid.Item>
                <Display htmlFor="leu" labelText="Leu">
                  {/* TODO add redux */}
                </Display>
              </Grid.Item>

              <Grid.Item>
                <Display htmlFor="nit" labelText="Nit">
                  {/* TODO add redux */}
                </Display>
              </Grid.Item>

              <Grid.Item>
                <Display htmlFor="ket" labelText="Ket">
                  {/* TODO add redux */}
                </Display>
              </Grid.Item>
            </Grid.Column>
          </Grid>
        </Wrapper>
      </Container>
    </>
  );
}
