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
export default function PatientList({ db }) {
  db.transaction("r", db.formData, async () => {
    const dbAuthToken = await db.formData.get("authToken");
    if (dbAuthToken) {
      console.log("AuthToken: ", dbAuthToken.value);
    }
  }).catch((error) => {
    console.log(error.stack || error);
    throw new Error(error.stack || error);
  });

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
