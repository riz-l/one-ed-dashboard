// Import: Packages
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsSummaryOpen } from "../../../redux/slices/dashboardSlice";
import { getPatientList } from "../../../redux/slices/patientListSlice";
import {
  clearPatient,
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
import {
  Attendance,
  PageTitle,
  PatientItem,
  PrimaryNavigation,
} from "../index";
import Button from "../Button/Button.component";

// Component: PatientList
export default function PatientList() {
  // Redux: Fetches isSummaryOpen, patientList, selectedPatient from the global state
  const isSummaryOpen = useSelector((state) => state.dashboard.isSummaryOpen);
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

  // Effect: Fetches patient list data on component render
  // ... sets a 30s timer after the initial render
  useEffect(() => {
    const patientListInterval = dispatch(getPatientList()).then(
      setInterval(() => {
        dispatch(getPatientList());
      }, 30000)
    );

    return () => clearInterval(patientListInterval);
  }, [dispatch]);

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
          <Item>
            <PageTitle heading="Patient List" subheading="Browse ED Patients" />

            {selectedPatient !== "" ? (
              <>
                <Button
                  margin="0 0.8rem -1.4rem 0"
                  onClick={() => dispatch(clearPatient())}
                  text="Clear Patient"
                />

                <Button
                  margin="0 0 -1.4rem 0"
                  onClick={() =>
                    isSummaryOpen
                      ? dispatch(setIsSummaryOpen(false))
                      : dispatch(setIsSummaryOpen(true))
                  }
                  text="Toggle Summary"
                />
              </>
            ) : null}

            <Attendance />
          </Item>

          <PrimaryNavigation margin="0 0 0 0" padding="1rem 0 0 2rem">
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
