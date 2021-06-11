// Import: Packages
import React from "react";

// Import: Components
import { PageTitle, PatientDemographics } from "../../components";

// Import: Elements
import { Container, ContentWrapper, Wrapper } from "./CASCard.elements";

// Page: CASCard
export default function CASCard() {
  return (
    <>
      <Container data-testid={"casCard"}>
        <Wrapper>
          <PageTitle
            heading="CAS Card"
            subheading="A Summary of the Patient's Condition"
          />

          <PatientDemographics />

          <ContentWrapper></ContentWrapper>
        </Wrapper>
      </Container>
    </>
  );
}
