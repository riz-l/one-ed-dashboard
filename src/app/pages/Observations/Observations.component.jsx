// Import: Packages
import React from "react";

// Import: Elements
import { Container, ContentWrapper, Wrapper } from "./Observations.elements";

// Import: Components
import { PageTitle, PatientDemographics } from "../../components";

// Page: Observations
export default function Observations() {
  return (
    <>
      <Container data-testid={"observations"}>
        <Wrapper>
          <PageTitle
            heading="Observations"
            subheading="Record Patient Observations"
          />

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
