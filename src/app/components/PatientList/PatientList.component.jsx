// Import: Packages
import React, { useState, useEffect } from "react";
import axios from "axios";

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
  // State: localToken, patientData
  const [localToken, setLocalToken] = useState("");
  const [patientData, setPatientData] = useState([]);

  db.transaction("r", db.formData, async () => {
    const dbAuthToken = await db.formData.get("authToken");
    if (dbAuthToken) {
      setLocalToken(dbAuthToken.value);
      // console.log("AuthToken: ", dbAuthToken.value);
      // console.log("LocalToken: ", localToken);
    }
  });

  // db.open();

  useEffect(() => {
    // Fetch Lorenzo authentication token
    const fetchLorenzoToken = () => {
      const apiGetPatient = process.env.REACT_GET_PATIENT_LIST;

      var config = {
        method: "get",
        url: `${apiGetPatient}`,
        headers: {
          accept: "application/json",
          "Authorization-Token": localToken,
        },
      };

      axios(config)
        .then(function (response) {
          // Update state
          setPatientData(response.data);
          console.log(patientData);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    fetchLorenzoToken();
  }, []);

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
