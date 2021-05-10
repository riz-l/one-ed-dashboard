// Import: Packages
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPatientList } from "../../../redux/slices/patientListSlice";
import {
  selectPatient,
  getSelectedPatient,
} from "../../../redux/slices/selectedPatientSlice";

// Import: Elements
import {
  Container,
  ListHeader,
  Table,
  TableWrapper,
  Wrapper,
} from "./PatientList.elements";

// Import: Components
import { Attendance, PatientItem } from "../index";
import PageTitle from "../PageTitle/PageTitle.component";

// Component: PatientList
export default function PatientList() {
  // Redux: Fetches token, patients, selectedPatient from the global state
  const token = useSelector((state) => state.userDetails.token);
  const patients = useSelector((state) => state.patientList.patients);
  const status = useSelector((state) => state.patientList.status);
  const selectedPatient = useSelector((state) => state.selectedPatient.patient);
  const dispatch = useDispatch();

  // Effect: Checks that a user token exists
  // ... if the token exists, fetch the Patient list data
  useEffect(() => {
    if (token !== "" && token.length > 0) {
      const interval = dispatch(getPatientList()).then(
        setInterval(() => {
          dispatch(getPatientList());
        }, 30000)
      );

      return () => clearInterval(interval);
    }
  }, [token, dispatch]);

  // Effect: Checks that there is a selectedPatient
  // ... if there is a selectedPatient, fetch selectPatient's data
  useEffect(() => {
    if (selectedPatient !== "") {
      dispatch(getSelectedPatient());
    }
  }, [selectedPatient, dispatch]);

  // Maps patientListData through PatientItem
  const patientListRender = patients.map(
    ({ patientID, ...otherPatientProps }) => (
      <PatientItem
        key={patientID}
        patientID={patientID}
        onClick={() => dispatch(selectPatient(patientID))}
        {...otherPatientProps}
      />
    )
  );

  return (
    <>
      <Container data-testid={"patientList"}>
        <ListHeader>
          <PageTitle heading="Patient List" subheading="Browse ED Patients" />
          <Attendance />
        </ListHeader>

        <Wrapper>
          <TableWrapper>
            <Table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Diagnosis</th>
                  <th>Period</th>
                </tr>
              </thead>
              <tbody>
                {status === "loading" ? (
                  <tr>
                    <td>Loading...</td>
                  </tr>
                ) : (
                  patientListRender
                )}
              </tbody>
            </Table>
          </TableWrapper>
        </Wrapper>
      </Container>
    </>
  );
}
