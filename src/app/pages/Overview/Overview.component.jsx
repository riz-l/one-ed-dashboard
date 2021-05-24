// Import: Packages
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPatientDemographics,
  getPatientAllergies,
  getPatientAlerts,
  getPatientConditions,
} from "../../../redux/slices/selectedPatientSlice";

// Import: Assets
import { ReactComponent as AlertsIcon } from "../../../assets/img/icon/alerts.svg";
import { ReactComponent as AllergiesIcon } from "../../../assets/img/icon/allergies.svg";
import { ReactComponent as ComplaintIcon } from "../../../assets/img/icon/presenting-complaint.svg";
import { ReactComponent as ComplicationsIcon } from "../../../assets/img/icon/complications.svg";
import { ReactComponent as DiagnosisIcon } from "../../../assets/img/icon/assessments-seen.svg";
import { ReactComponent as FindingsIcon } from "../../../assets/img/icon/findings.svg";
import { ReactComponent as MoreIcon } from "../../../assets/img/icon/more.svg";
import { ReactComponent as ProceduresIcon } from "../../../assets/img/icon/procedures.svg";
import { ReactComponent as SymptomsIcon } from "../../../assets/img/icon/symptoms.svg";

// Import: Elements
import { Container, ContentWrapper, Wrapper } from "./Overview.elements";
import { PatientDetails } from "../../components/index";

// Import: Components, SubPages
import {
  PageTitle,
  ReportSection,
  SecondaryNavigation,
} from "../../components";

import {
  Alerts,
  Allergies,
  PresentingComplaints,
  Complications,
  Diagnosis,
  Findings,
  Procedures,
  Symptoms,
} from "./subPages";

// Page: Overview
export default function Overview() {
  // Redux: Fetches patient, patientData, patientDemographics, patientAlerts,
  // ... patientAllergies, patientConditions from the global state
  const patient = useSelector((state) => state.selectedPatient.patient);
  const patientAlerts = useSelector(
    (state) => state.selectedPatient.patientAlerts
  );
  const patientAllergies = useSelector(
    (state) => state.selectedPatient.patientAllergies
  );
  const patientConditions = useSelector(
    (state) => state.selectedPatient.patientConditions
  );
  // Redux: Extracts Patient Data from the global state
  const dispatch = useDispatch();

  // State: windowDimensions
  const [windowDimensions, setWindowDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  // State: History SubPages
  const [isAlerts, setIsAlerts] = useState(true);
  const [isAllergies, setIsAllergies] = useState(false);
  const [isComplications, setIsComplications] = useState(false);
  const [isDiagnosis, setIsDiagnosis] = useState(false);
  const [isFindings, setIsFindings] = useState(false);
  const [isPresentingComplaints, setIsPresentingComplaints] = useState(false);
  const [isProcedures, setIsProcedures] = useState(false);
  const [isSymptoms, setIsSymptoms] = useState(false);

  // Effect: Checks window height and width
  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Effect: Fetches patient demographics using the set patientID
  useEffect(() => {
    if (patient !== "") {
      dispatch(getPatientDemographics());
      dispatch(getPatientAllergies());
      dispatch(getPatientAlerts());
      dispatch(getPatientConditions());
    }
  }, [patient, dispatch]);

  // onClick: Renders Alerts SubPage
  function renderAlerts() {
    setIsAllergies(false);
    setIsPresentingComplaints(false);
    setIsComplications(false);
    setIsDiagnosis(false);
    setIsFindings(false);
    setIsProcedures(false);
    setIsSymptoms(false);
    setIsAlerts(true);
  }

  // onClick: Renders Allergies SubPage
  function renderAllergies() {
    setIsAlerts(false);
    setIsPresentingComplaints(false);
    setIsComplications(false);
    setIsDiagnosis(false);
    setIsFindings(false);
    setIsProcedures(false);
    setIsSymptoms(false);
    setIsAllergies(true);
  }

  // onClick: Renders Complications SubPage
  function renderComplications() {
    setIsAlerts(false);
    setIsAllergies(false);
    setIsPresentingComplaints(false);
    setIsDiagnosis(false);
    setIsFindings(false);
    setIsProcedures(false);
    setIsSymptoms(false);
    setIsComplications(true);
  }

  // onClick: Renders Diagnosis SubPage
  function renderDiagnosis() {
    setIsAlerts(false);
    setIsAllergies(false);
    setIsPresentingComplaints(false);
    setIsComplications(false);
    setIsFindings(false);
    setIsProcedures(false);
    setIsSymptoms(false);
    setIsDiagnosis(true);
  }

  // onClick: Renders Findings SubPage
  function renderFindings() {
    setIsAlerts(false);
    setIsAllergies(false);
    setIsPresentingComplaints(false);
    setIsComplications(false);
    setIsDiagnosis(false);
    setIsProcedures(false);
    setIsSymptoms(false);
    setIsFindings(true);
  }

  // onClick: Renders Complaint SubPage
  function renderComplaint() {
    setIsAlerts(false);
    setIsAllergies(false);
    setIsComplications(false);
    setIsDiagnosis(false);
    setIsFindings(false);
    setIsProcedures(false);
    setIsSymptoms(false);
    setIsPresentingComplaints(true);
  }

  // onClick: Renders Procedures SubPage
  function renderProcedures() {
    setIsAlerts(false);
    setIsAllergies(false);
    setIsPresentingComplaints(false);
    setIsComplications(false);
    setIsDiagnosis(false);
    setIsFindings(false);
    setIsSymptoms(false);
    setIsProcedures(true);
  }

  // onClick: Renders Symptoms SubPage
  function renderSymptoms() {
    setIsAlerts(false);
    setIsAllergies(false);
    setIsPresentingComplaints(false);
    setIsComplications(false);
    setIsDiagnosis(false);
    setIsFindings(false);
    setIsProcedures(false);
    setIsSymptoms(true);
  }

  return (
    <>
      <Container data-testid={"overview"}>
        <PageTitle
          backgroundColor="transparent"
          heading="Overview"
          subheading="Patient details and history"
        />

        <PatientDetails />

        <Wrapper>
          <ContentWrapper>
            <ReportSection
              secondaryNavigation={
                <SecondaryNavigation>
                  {windowDimensions.width <= 1470 ? (
                    <SecondaryNavigation.Item>
                      <SecondaryNavigation.Icon>
                        <MoreIcon />
                      </SecondaryNavigation.Icon>
                      <SecondaryNavigation.Text>More</SecondaryNavigation.Text>
                    </SecondaryNavigation.Item>
                  ) : null}

                  <SecondaryNavigation.Item
                    isActive={isAlerts ? true : false}
                    onClick={renderAlerts}
                  >
                    <SecondaryNavigation.Icon
                      isRed={
                        patientAlerts && patientAlerts.length > 0 ? true : false
                      }
                    >
                      <AlertsIcon />
                    </SecondaryNavigation.Icon>
                    <SecondaryNavigation.Text>Alerts</SecondaryNavigation.Text>
                  </SecondaryNavigation.Item>

                  <SecondaryNavigation.Item
                    isActive={isAllergies ? true : false}
                    onClick={renderAllergies}
                  >
                    <SecondaryNavigation.Icon
                      isRed={
                        patientAllergies && patientAllergies.length > 0
                          ? true
                          : false
                      }
                    >
                      <AllergiesIcon />
                    </SecondaryNavigation.Icon>
                    <SecondaryNavigation.Text>
                      Allergies
                    </SecondaryNavigation.Text>
                  </SecondaryNavigation.Item>

                  <SecondaryNavigation.Item
                    isActive={isComplications ? true : false}
                    onClick={renderComplications}
                  >
                    <SecondaryNavigation.Icon
                      isRed={
                        patientConditions &&
                        patientConditions.length > 0 &&
                        patientConditions.find(
                          ({ category }) => category === "Complications"
                        )
                          ? true
                          : false
                      }
                    >
                      <ComplicationsIcon />
                    </SecondaryNavigation.Icon>
                    <SecondaryNavigation.Text>
                      Complications
                    </SecondaryNavigation.Text>
                  </SecondaryNavigation.Item>

                  <SecondaryNavigation.Item
                    isActive={isDiagnosis ? true : false}
                    onClick={renderDiagnosis}
                  >
                    <SecondaryNavigation.Icon
                      isRed={
                        patientConditions &&
                        patientConditions.length > 0 &&
                        patientConditions.find(
                          ({ category }) => category === "Diagnosis"
                        )
                          ? true
                          : false
                      }
                    >
                      <DiagnosisIcon />
                    </SecondaryNavigation.Icon>
                    <SecondaryNavigation.Text>
                      Diagnosis
                    </SecondaryNavigation.Text>
                  </SecondaryNavigation.Item>

                  {windowDimensions.width <= 1470 ? null : (
                    <>
                      <SecondaryNavigation.Item
                        isActive={isFindings ? true : false}
                        onClick={renderFindings}
                      >
                        <SecondaryNavigation.Icon
                          isRed={
                            patientConditions &&
                            patientConditions.length > 0 &&
                            patientConditions.find(
                              ({ category }) => category === "Findings"
                            )
                              ? true
                              : false
                          }
                        >
                          <FindingsIcon />
                        </SecondaryNavigation.Icon>
                        <SecondaryNavigation.Text>
                          Findings
                        </SecondaryNavigation.Text>
                      </SecondaryNavigation.Item>

                      <SecondaryNavigation.Item
                        isActive={isPresentingComplaints ? true : false}
                        onClick={renderComplaint}
                      >
                        <SecondaryNavigation.Icon
                          isRed={
                            patientConditions &&
                            patientConditions.length > 0 &&
                            patientConditions.find(
                              ({ category }) =>
                                category === "Presenting complaints"
                            )
                              ? true
                              : false
                          }
                        >
                          <ComplaintIcon />
                        </SecondaryNavigation.Icon>
                        <SecondaryNavigation.Text>
                          Presenting Complaints
                        </SecondaryNavigation.Text>
                      </SecondaryNavigation.Item>

                      <SecondaryNavigation.Item
                        isActive={isProcedures ? true : false}
                        onClick={renderProcedures}
                      >
                        <SecondaryNavigation.Icon
                          isRed={
                            patientConditions &&
                            patientConditions.length > 0 &&
                            patientConditions.find(
                              ({ category }) => category === "Procedures"
                            )
                              ? true
                              : false
                          }
                        >
                          <ProceduresIcon />
                        </SecondaryNavigation.Icon>
                        <SecondaryNavigation.Text>
                          Procedures
                        </SecondaryNavigation.Text>
                      </SecondaryNavigation.Item>

                      <SecondaryNavigation.Item
                        isActive={isSymptoms ? true : false}
                        onClick={renderSymptoms}
                      >
                        <SecondaryNavigation.Icon
                          isRed={
                            patientConditions &&
                            patientConditions.length > 0 &&
                            patientConditions.find(
                              ({ category }) => category === "Symptoms"
                            )
                              ? true
                              : false
                          }
                        >
                          <SymptomsIcon />
                        </SecondaryNavigation.Icon>
                        <SecondaryNavigation.Text>
                          Symptoms
                        </SecondaryNavigation.Text>
                      </SecondaryNavigation.Item>
                    </>
                  )}
                </SecondaryNavigation>
              }
              content={
                isAlerts ? (
                  <Alerts />
                ) : isAllergies ? (
                  <Allergies />
                ) : isComplications ? (
                  <Complications />
                ) : isDiagnosis ? (
                  <Diagnosis />
                ) : isFindings ? (
                  <Findings />
                ) : isPresentingComplaints ? (
                  <PresentingComplaints />
                ) : isProcedures ? (
                  <Procedures />
                ) : isSymptoms ? (
                  <Symptoms />
                ) : null
              }
            />
          </ContentWrapper>
        </Wrapper>
      </Container>
    </>
  );
}
