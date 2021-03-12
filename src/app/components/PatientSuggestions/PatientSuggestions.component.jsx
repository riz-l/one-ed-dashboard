// Import: Packages
import React from "react";

// Import: Elements
import { Container, Header, Wrapper } from "./PatientSuggestions.elements";

// Component: PatientSuggestioins
export default function PatientSuggestions() {
  return (
    <>
      <Container data-testid={"patientSuggestions"}>
        <Header>
          <h2>Suggestions</h2>
          <span>Proposed sections to complete</span>
        </Header>

        <Wrapper></Wrapper>
      </Container>
    </>
  );
}
