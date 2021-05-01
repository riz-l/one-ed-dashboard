// Import: Packages
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPatientList } from "../../../redux/slices/patientListSlice";

// Import: Elements
import {
  Container,
  Header,
  Table,
  TableWrapper,
  Wrapper,
} from "./PatientList.elements";

// Import: Components
import { PatientItem } from "../index";

// Component: PatientList
export default function PatientList() {
  // State: patientListData
  const [patientListData, setPatientListData] = useState([]);

  // Redux: Fetches token and patients from the global state
  const token = useSelector((state) => state.userDetails.token);
  const patients = useSelector((state) => state.patientList.patients);
  const status = useSelector((state) => state.patientList.status);
  const dispatch = useDispatch();

  // Effect: Checks that a user token exists
  // ... if the token exists, fetch the Patient list data
  useEffect(() => {
    if (token !== "" && token.length > 0) {
      dispatch(getPatientList());
    }
  }, [token]);

  // Maps patientListData through PatientItem
  const patientListRender = patients.map(
    ({ patientID, ...otherPatientProps }) => (
      <PatientItem key={patientID} {...otherPatientProps} />
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
          <TableWrapper>
            <Table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>DOB</th>
                  <th>Gender</th>
                  <th>Diagnosis</th>
                  <th>Period</th>
                </tr>
              </thead>
              <tbody>
                {status === "loading" ? <p>Loading...</p> : patientListRender}
              </tbody>
            </Table>
          </TableWrapper>
        </Wrapper>
      </Container>
    </>
  );
}
