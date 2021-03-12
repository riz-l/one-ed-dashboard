// Import: Packages
import React from "react";

// Import: Elements
import {
  Container,
  Header,
  ItemContainer,
  Wrapper,
} from "./PatientList.elements";

// Import: Components
import { PatientItem } from "../index";

// Component: PatientList
export default function PatientList() {
  return (
    <>
      <Container data-testid={"patientList"}>
        <Header>
          <h2>Patient List</h2>
          <span>Browse ED Patients</span>
        </Header>

        <Wrapper>
          <ItemContainer>
            <PatientItem />
            <PatientItem />
            <PatientItem />
            <PatientItem />
            <PatientItem />
            <PatientItem />
            <PatientItem />
          </ItemContainer>
        </Wrapper>
      </Container>
    </>
  );
}
