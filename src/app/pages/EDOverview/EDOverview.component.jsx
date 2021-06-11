// Import: Packages
import React from "react";

// Import: Components, subPages
import { PageTitle } from "../../components";

// Import: Elements
import { Container, ContentWrapper, Wrapper } from "./EDOverview.elements";

// Page: EDOverview
export default function EDOverview() {
  return (
    <>
      <Container data-testid={"edOverview"}>
        <Wrapper>
          <PageTitle
            heading="ED Overview"
            subheading="Summary of the ED Department"
          />

          <ContentWrapper></ContentWrapper>
        </Wrapper>
      </Container>
    </>
  );
}
