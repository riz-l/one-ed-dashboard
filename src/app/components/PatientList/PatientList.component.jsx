// Import: Packages
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIncomingPatients } from "../../../redux/slices/incomingPatientsSlice";
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
  const incomingPatients = useSelector(
    (state) => state.incomingPatients.incoming
  );
  const status = useSelector((state) => state.patientList.status);
  const selectedPatient = useSelector((state) => state.selectedPatient.patient);
  const dispatch = useDispatch();

  // State: isPatientList, isIncomingPatients
  const [isPatientList, setIsPatientList] = useState(true);
  const [isIncomingPatients, setIsIncomingPatients] = useState(false);

  // Effect: Fetches patient list data on component render
  // ... sets a 30s timer after the initial render
  useEffect(() => {
    // const patientListInterval = dispatch(getPatientList()).then(
    //   setInterval(() => {
    //     dispatch(getPatientList());
    //   }, 30000)
    // );

    dispatch(getPatientList());
    dispatch(getIncomingPatients());

    // return () => clearInterval(patientListInterval);
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
    ({
      patientID,
      name,
      age,
      gender,
      diagnosis,
      period,
      ...otherPatientProps
    }) => (
      <PatientItem
        key={patientID}
        patientID={patientID}
        onClick={() => dispatch(selectPatient(patientID))}
        colOne={name}
        colTwo={age}
        colThree={gender}
        colFour={diagnosis}
        colFive={period}
        patientList
        {...otherPatientProps}
      />
    )
  );

  // Maps incomingPatients through PatientItem
  const incomingPatientListRender = incomingPatients.map(
    ({
      PD_Firstname,
      PD_Surname,
      PD_Age,
      PD_Gender,
      PD_Reported_Condition,
      PD_Arrived_Time,
      Master_ePR_ID,
      ...otherPatientProps
    }) => (
      <PatientItem
        key={Master_ePR_ID}
        patientID={Master_ePR_ID}
        // onClick={() => dispatch(selectPatient(patientID))}
        colOne={
          PD_Firstname || PD_Surname ? `${PD_Firstname} ${PD_Surname}` : "N/A"
        }
        colTwo={PD_Age ? PD_Age : "N/A"}
        colThree={PD_Gender ? PD_Gender : "N/A"}
        colFour={PD_Reported_Condition ? PD_Reported_Condition : "N/A"}
        colFive={PD_Arrived_Time ? PD_Arrived_Time : "N/A"}
        incomingPatients
        {...otherPatientProps}
      />
    )
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
