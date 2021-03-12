// Import: Packages
import React from "react";

// Import: Elements
import { Container, Header, Wrapper } from "./PatientStream.elements";

// Component: PatientStream
export default function PatientStream() {
  return (
    <>
      <Container data-testid={"patientStream"}>
        <Header>
          <h2>Stream</h2>
          <span>Follow the Patient work stream</span>
        </Header>

        <Wrapper></Wrapper>
      </Container>
    </>
  );
}
