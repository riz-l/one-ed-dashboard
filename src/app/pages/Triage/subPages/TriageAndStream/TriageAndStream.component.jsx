// Import: Packages
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./TriageAndStream.elements";

// Import: Components
import { Grid, Input, Text } from "../../../../components";

// SubPage: TriageAndStream
export default function TriageAndStream() {
  return (
    <>
      <Container data-testid={"triageAndStream"}>
        <Wrapper>
          <Text heading as="h2">
            Triage
          </Text>

          <Grid>
            {/* <Grid.Column>
              <Grid.Item>
                <Radio text="Component: Radio" />
              </Grid.Item>

              <Grid.Item>
                <Input labelText="Component: Input" />
              </Grid.Item>

              <Grid.Item>
                <Text as="p">Component: Text (Default)</Text>
              </Grid.Item>
            </Grid.Column>

            <Grid.Column>
              <Grid.Item>
                <Text as="h2" heading>
                  Component: Text (Heading)
                </Text>
              </Grid.Item>

              <Grid.Item>
                <Text as="h3" subheading>
                  Component: Text (SubHeading)
                </Text>
              </Grid.Item>

              <Grid.Item>
                <Text as="p" text>
                  Component: Text (Text)
                </Text>
              </Grid.Item>
            </Grid.Column> */}

            <Grid.Column>
              <Grid.Item>
                <Input labelText="Arrival Date/Time" />
              </Grid.Item>
              <Grid.Item>
                <Input labelText="Triage Date" />
              </Grid.Item>
              <Grid.Item>
                <Input labelText="Triage Time" />
              </Grid.Item>
              <Grid.Item>
                <Input labelText="Triage System" />
              </Grid.Item>
            </Grid.Column>

            <Grid.Column>
              <Grid.Item>
                <Input labelText="Location" />
              </Grid.Item>
              <Grid.Item>
                <Input labelText="Cheif Complaint" />
              </Grid.Item>
              <Grid.Item>
                <Input labelText="Triage Category" />
              </Grid.Item>
            </Grid.Column>
            <Grid.Column>
              <Grid.Item>
                <Input labelText="Triage By" />
              </Grid.Item>
            </Grid.Column>
          </Grid>
        </Wrapper>
      </Container>
    </>
  );
}
