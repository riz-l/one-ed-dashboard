// Import: Packages
import React from "react";

// Import: Assets
import { ReactComponent as InformationIcon } from "../../../assets/img/icon/information.svg";

// Import: Elements
import { Container, Header, Wrapper } from "./PatientDemographics.elements";

// Component: PatientDemographics
export default function PatientDemographics() {
  return (
    <>
      <Container data-testid={"patientDemographics"}>
        <Wrapper>
          <Header>
            <InformationIcon />
            <h3>Patient Demographics</h3>
          </Header>
        </Wrapper>
      </Container>
    </>
  );
}
