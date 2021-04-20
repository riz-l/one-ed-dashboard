// Import: Packages
import React from "react";

// Import: Elements
import { Container, ContentWrapper, Header, Wrapper } from "./Observations.elements";

// Import: Components
import {PatientDemographics} from "../../components"

// Component: Observations
export default function Observations() {
  return (
    <>
      <Container data-testid={"observations"}>
      <Wrapper>
      <Header>
        <h2>Observations</h2>
        <span>Record observations for the selected patient</span>
        </Header>
        <PatientDemographics/>
        <ContentWrapper>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt tempora
          veniam tenetur molestiae corporis laudantium aliquam distinctio eos?
          Cum omnis officiis tempora ipsa esse. Minima unde velit voluptatum
          doloribus natus.
        </p>
        </ContentWrapper>
        </Wrapper>
      </Container>
    </>
  );
}
