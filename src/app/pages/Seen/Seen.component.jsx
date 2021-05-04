// Import: Packages
import React from "react";

// Import: Elements
import { Container, ContentWrapper, Header, Wrapper } from "./Seen.elements";

// Import: Components
import { PatientDemographics } from "../../components";

// Page: Seen
export default function Seen() {
  return (
    <>
      <Container data-testid={"seen"}>
        <Wrapper>
          <Header>
            <h2>Seen</h2>
            <span>Clinican details of seeing Patient</span>
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
