// Import: Packages
import React from "react";

// Import: Elements
import {
  Container,
  ContentWrapper,
  Header,
  Wrapper,
} from "./Settings.elements";

// Import: Components
import { PatientDemographics } from "../../components";

// Page: Settings
export default function Settings() {
  return (
    <>
      <Container data-testid={"settings"}>
        <Wrapper>
          <Header>
            <h2>Settings</h2>
            <span>
              The Seen page records when a clinican has seen a patient.
            </span>
          </Header>

          <PatientDemographics />

          <ContentWrapper>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              tempora veniam tenetur molestiae corporis laudantium aliquam
              distinctio eos? Cum omnis officiis tempora ipsa esse. Minima unde
              velit voluptatum doloribus natus.
            </p>
          </ContentWrapper>
        </Wrapper>
      </Container>
    </>
  );
}
