// Import: Packages
import React from "react";

// Import Components
import { PatientDemographics } from "../../components";

// Import: Elements
import { Container, ContentWrapper, Header, Wrapper } from "./CASCard.elements";

// Page: CASCard
export default function CASCard() {
  return (
    <>
      <Container data-testid={"casCard"}>
        <Wrapper>
          <Header>
            <h2>CAS Card</h2>
            <span>Summary of Patient's condition</span>
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
