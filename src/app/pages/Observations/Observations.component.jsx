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

          <ContentWrapper></ContentWrapper>
        </Wrapper>
      </Container>
    </>
  );
}
