// Import: Packages
import React from "react";
import { Link } from "react-router-dom";

// Import Assets
import { ReactComponent as DashboardIcon } from "../../../../../assets/img/icon/ward-dashboard.svg";

// Import: Elements
import {
  Container,
  IconContainer,
  Suggestion,
  Suggestions,
  Wrapper,
} from "./Save.elements";

// Import: Components
import { Grid, Text } from "../../../../components";

// SubPage: Save
export default function Save() {
  return (
    <>
      <Container data-testid={"save"}>
        <Wrapper>
          <Text as="h2" heading>
            Save
          </Text>

          <Grid>
            <Grid.Column>
              <Grid.Item horizontal>
                <Suggestions>
                  <Grid.Item>
                    <Link to="/one-ed/ward/dashboard">
                      <Suggestion>
                        <IconContainer>
                          <DashboardIcon />
                        </IconContainer>

                        <span>Return to Dashboard</span>
                      </Suggestion>
                    </Link>
                  </Grid.Item>
                </Suggestions>
              </Grid.Item>
            </Grid.Column>
          </Grid>
        </Wrapper>
      </Container>
    </>
  );
}
