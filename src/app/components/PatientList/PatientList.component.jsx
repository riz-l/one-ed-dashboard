// Import: Packages
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIncomingPatients } from "../../../redux/slices/incomingPatientsSlice";
import { getPatientList } from "../../../redux/slices/patientListSlice";
import {
  getSelectedPatient,
  selectPatient,
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
  // Attendance,
  PageTitle,
  PatientItem,
  PrimaryNavigation,
  ReportModal,
} from "../index";

// Component: PatientList
export default function PatientList() {
  // Redux: useSelector, useDispatch
  const patientList = useSelector((state) => {
    if (state.patientList.patients) {
      return state.patientList.patients;
    }
  });
  const incomingPatients = useSelector((state) => {
    if (state.incomingPatients.incoming) {
      return state.incomingPatients.incoming;
    }
  });
  const status = useSelector((state) => {
    if (state.patientList.status) {
      return state.patientList.status;
    }
  });
  const selectedPatient = useSelector((state) => {
    if (state.selectedPatient.patient) {
      return state.selectedPatient.patient;
    }
  });
  const dispatch = useDispatch();

  // State: Local state
  const [isIncomingPatients, setIsIncomingPatients] = useState(false);
  const [isPatientList, setIsPatientList] = useState(true);

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
  // ... if there is a selectedPatient, fetch selectedPatient's data
  useEffect(() => {
    if (selectedPatient !== "") {
      dispatch(getSelectedPatient());
    }
  }, [selectedPatient, dispatch]);

  // onClick: Functions for rendering different Patient lists
  function renderPatientList() {
    setIsIncomingPatients(false);
    setIsPatientList(true);
  }
  function renderIncomingPatients() {
    setIsPatientList(false);
    setIsIncomingPatients(true);
  }

  // Maps patientListData through PatientItem
  const subPatientListRender =
    patientList &&
    patientList.map(
      ({
        age,
        currentStage,
        diagnosis,
        name,
        patientID,
        period,
        Triagecategory,
        ...otherPatientProps
      }) => (
        <PatientItem
          colOne={name ? name : "N/A"}
          colTwo={age === "undefined" ? "N/A" : age ? age : "N/A"}
          colThree={diagnosis ? diagnosis : "N/A"}
          colFour={period === "undefined" ? "N/A" : period ? period : "N/A"}
          colFive={
            Triagecategory === "undefined"
              ? "N/A"
              : Triagecategory
              ? Triagecategory
              : "N/A"
          }
          colSix={currentStage ? currentStage : "N/A"}
          key={patientID}
          onClick={() => dispatch(selectPatient(patientID))}
          patient={selectedPatient}
          patientID={patientID}
          patientList
          {...otherPatientProps}
        />
      )
    );

  // Maps incomingPatients through PatientItem
  const incomingPatientListRender = incomingPatients.map(
    ({
      Master_ePR_ID,
      PD_Age_Mths,
      PD_Age_Yrs,
      PD_Arrived_Time,
      PD_Ethnicity,
      PD_Firstname,
      PD_Gender,
      PD_Reported_Condition,
      PD_Surname,
      ...otherPatientProps
    }) => (
      <PatientItem
        key={Master_ePR_ID}
        colOne={
          PD_Firstname || PD_Surname ? `${PD_Firstname} ${PD_Surname}` : "N/A"
        }
        colTwo={
          PD_Age_Yrs || PD_Age_Mths
            ? `${PD_Age_Yrs && PD_Age_Yrs + " years"} ${
                PD_Age_Mths && PD_Age_Mths + " months"
              }`
            : "N/A"
        }
        colThree={PD_Gender ? PD_Gender : "N/A"}
        colFour={PD_Ethnicity ? PD_Ethnicity : "N/A"}
        colFive={PD_Reported_Condition ? PD_Reported_Condition : "N/A"}
        colSix={<ReportModal patientID={Master_ePR_ID} />}
        incomingPatients
        patientID={Master_ePR_ID}
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
            {/* <Attendance /> */}
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
                  {isPatientList ? (
                    <>
                      <THeading isPatientList={isPatientList}>Name</THeading>
                      <THeading isPatientList={isPatientList}>Age</THeading>
                      <THeading isPatientList={isPatientList}>
                        Diagnosis
                      </THeading>
                      <THeading isPatientList={isPatientList}>Period</THeading>
                      <THeading isPatientList={isPatientList}>
                        Triage Category
                      </THeading>
                      <THeading isPatientList={isPatientList}>Status</THeading>
                    </>
                  ) : isIncomingPatients ? (
                    <>
                      <THeading isPatientList={isPatientList}>Name</THeading>
                      <THeading isPatientList={isPatientList}>Age</THeading>
                      <THeading isPatientList={isPatientList}>Gender</THeading>
                      <THeading isPatientList={isPatientList}>
                        Ethnicity
                      </THeading>
                      <THeading isPatientList={isPatientList}>
                        Diagnosis
                      </THeading>
                      <THeading isPatientList={isPatientList}>Report</THeading>
                    </>
                  ) : null}
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
