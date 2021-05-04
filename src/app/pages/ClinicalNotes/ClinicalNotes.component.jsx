// Import: Packages
import React from "react";

// Import: Elements
import {
  Container,
  ContentWrapper,
  Header,
  Wrapper,
} from "./ClinicalNotes.elements";

// Import: Components
import { PatientDemographics } from "../../components";

// Page: ClinicalNotes
export default function ClinicalNotes() {
  return (
    <>
      <Container data-testid={"clinicalNotes"}>
        <Wrapper>
          <Header>
            <h2>Clinical Notes</h2>
            <span>Select a clinical note template to begin</span>
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
