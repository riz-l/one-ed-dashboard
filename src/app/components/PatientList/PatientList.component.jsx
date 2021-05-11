// Import: Packages
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPatientList } from "../../../redux/slices/patientListSlice";
import {
  selectPatient,
  getSelectedPatient,
} from "../../../redux/slices/selectedPatientSlice";

// Import: Elements
import {
  Container,
  Item,
  ListHeader,
  Table,
  TableWrapper,
  THeading,
  Wrapper,
} from "./PatientList.elements";

// Import: Components
import { Attendance, PatientItem, PrimaryNavigation } from "../index";
import PageTitle from "../PageTitle/PageTitle.component";

// Component: PatientList
export default function PatientList() {
  // Redux: Fetches token, patientList, selectedPatient from the global state
  const token = useSelector((state) => state.userDetails.token);
  const patientList = useSelector((state) => state.patientList.patients);
  // const incomingPatients = useSelector(
  //   (state) => state.incomingPatients.incoming
  // );
  const status = useSelector((state) => state.patientList.status);
  const selectedPatient = useSelector((state) => state.selectedPatient.patient);
  const dispatch = useDispatch();

  // State: isPatientList, isIncomingPatients
  const [isPatientList, setIsPatientList] = useState(true);
  const [isIncomingPatients, setIsIncomingPatients] = useState(false);

  // Effect: Checks that a user token exists
  // ... if the token exists, fetch the Patient list data
  useEffect(() => {
    if (token !== "" && token.length > 0) {
      const patientListInterval = dispatch(getPatientList()).then(
        setInterval(() => {
          dispatch(getPatientList());
        }, 30000)
      );

      return () => clearInterval(patientListInterval);
    }
  }, [token, dispatch]);

  // Effect: Checks that there is a selectedPatient
  // ... if there is a selectedPatient, fetch selectPatient's data
  useEffect(() => {
    if (selectedPatient !== "") {
      dispatch(getSelectedPatient());
    }
  }, [selectedPatient, dispatch]);

  // onClick: Renders patientList
  function renderPatientList() {
    setIsIncomingPatients(false);
    setIsPatientList(true);
  }

  // onClick: Renders incomingPatients
  function renderIncomingPatients() {
    setIsPatientList(false);
    setIsIncomingPatients(true);
  }

  // Maps patientListData through PatientItem
  const subPatientListRender = patientList.map(
    ({ patientID, ...otherPatientProps }) => (
      <PatientItem
        key={patientID}
        patientID={patientID}
        onClick={() => dispatch(selectPatient(patientID))}
        {...otherPatientProps}
      />
    )
  );

  // Maps incomingPatients through PatientItem
  const incomingPatientListRender = (
    <>
      <tr>
        <td>PLACEHOLDER</td>
        <td>PLACEHOLDER</td>
        <td>PLACEHOLDER</td>
        <td>PLACEHOLDER</td>
        <td>PLACEHOLDER</td>
      </tr>
    </>
  );

  return (
    <>
      <Container data-testid={"patientList"}>
        <ListHeader>
          <PrimaryNavigation margin="0 0 -1rem 0" padding="1rem 0 0 2rem">
            <PrimaryNavigation.Item
              isActive={isPatientList ? true : false}
              onClick={renderPatientList}
            >
              <PrimaryNavigation.Text>Patient List</PrimaryNavigation.Text>
            </PrimaryNavigation.Item>

            <PrimaryNavigation.Item
              isActive={isIncomingPatients ? true : false}
              onClick={renderIncomingPatients}
            >
              <PrimaryNavigation.Text>Incoming Patients</PrimaryNavigation.Text>
            </PrimaryNavigation.Item>
          </PrimaryNavigation>

          <Item>
            <PageTitle heading="Patient List" subheading="Browse ED Patients" />
            <Attendance />
          </Item>
        </ListHeader>

        <Wrapper>
          <TableWrapper>
            <Table>
              <thead>
                <tr>
                  <THeading isPatientList={isPatientList}>Name</THeading>
                  <THeading isPatientList={isPatientList}>Age</THeading>
                  <THeading isPatientList={isPatientList}>Gender</THeading>
                  <THeading isPatientList={isPatientList}>Diagnosis</THeading>
                  <THeading isPatientList={isPatientList}>Period</THeading>
                </tr>
              </thead>
              <tbody>
                {status === "loading" ? (
                  <tr>
                    <td>Loading...</td>
                  </tr>
                ) : isPatientList ? (
                  subPatientListRender
                ) : isIncomingPatients ? (
                  incomingPatientListRender
                ) : null}
              </tbody>
            </Table>
          </TableWrapper>
        </Wrapper>
      </Container>
    </>
  );
}
