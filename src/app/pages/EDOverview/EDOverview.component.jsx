// Import: Packages
import React from "react";

// Import: Elements
import {
  Container,
  ContentWrapper,
  Header,
  Wrapper,
} from "./EDOverview.elements";

// Page: EDOverview
export default function EDOverview() {
  return (
    <>
      <Container data-testid={"edOverview"}>
        <Wrapper>
          <Header>
            <h2>ED Overview</h2>
            <span>Summary of the ED Department</span>
          </Header>
          <ContentWrapper></ContentWrapper>
        </Wrapper>
      </Container>
    </>
  );
}
