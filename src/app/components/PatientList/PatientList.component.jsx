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

  // Effect: Fetches authToken from the IndexedDB, and sets localToken === authToken
  useEffect(() => {
    const fetchDbToken = async () => {
      const dbAuthToken = await db.formData.get("authToken");
      setLocalToken(dbAuthToken.value);
    };

    fetchDbToken();
  }, [db]);

  // Effect: Logs value of localToken on change
  // Effect: Upon change to localToken, fetches patientData from
  // ... Lorenzo api/GetPatientList
  useEffect(() => {
    var config = {
      method: "get",
      url: `https://oneedfhirtest.azurewebsites.net/GetPatientList`,
      headers: {
        accept: "application/json",
        "Authorization-Token": localToken,
      },
    };

    if (localToken.length > 10) {
      axios(config)
        .then(function (response) {
          setPatientData(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      return null;
    }
  }, [localToken]);

  // Effect: Logs patientData on change to value
  useEffect(() => {
    console.log("PATIENT DATA: ", patientData);
  }, [patientData]);

  // Maps patientData through PatientItem
  const patientListRender = patientData.map(
    ({ patientID, ...otherPatientProps }) => (
      <div key={patientID}>
        <div>
          <PatientItem {...otherPatientProps} />
        </div>
      </div>
    )
  );

  return (
    <>
      <Container data-testid={"patientList"}>
        <Header>
          <h2>Patient List</h2>
          <span>Browse ED Patients</span>
        </Header>

        <Wrapper>
          <ItemContainer>{patientListRender}</ItemContainer>
        </Wrapper>
      </Container>
    </>
  );
}
