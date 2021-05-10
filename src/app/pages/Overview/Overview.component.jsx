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
import { ReactComponent as DetailsIcon } from "../../../assets/img/icon/patient.svg";
import { ReactComponent as DiagnosisIcon } from "../../../assets/img/icon/assessments-seen.svg";
import { ReactComponent as FindingsIcon } from "../../../assets/img/icon/findings.svg";
import { ReactComponent as MoreIcon } from "../../../assets/img/icon/more.svg";
import { ReactComponent as ProceduresIcon } from "../../../assets/img/icon/procedures.svg";
import { ReactComponent as SymptomsIcon } from "../../../assets/img/icon/symptoms.svg";

// Import: Elements
import { Container, ContentWrapper, Wrapper } from "./Overview.elements";

// Import: Components, SubPages
import {
  PageTitle,
  PrimaryNavigation,
  ReportSection,
  SecondaryNavigation,
} from "../../components";
import {
  Alerts,
  Allergies,
  Complaint,
  Complications,
  Details,
  Diagnosis,
  Findings,
  Procedures,
  Symptoms,
} from "./subPages";

// Page: Overview
export default function Overview() {
  // Redux: Fetches patient, patientData, patientDemographics, patientAlerts
  // ... patientAllergies, patientConditions from the global state
  const patient = useSelector((state) => state.selectedPatient.patient);
  const patientData = useSelector((state) => state.selectedPatient.patientData);
  const patientDemographics = useSelector(
    (state) => state.selectedPatient.patientDemographics
  );
  const patientAlerts = useSelector(
    (state) => state.selectedPatient.patientAlerts
  );
  const patientAllergies = useSelector(
    (state) => state.selectedPatient.patientAllergies
  );
  const patientConditions = useSelector(
    (state) => state.selectedPatient.patientConditions
  );
  const dispatch = useDispatch();

  // State: windowDimensions
  const [windowDimensions, setWindowDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  // State: isDetails, isHealthHistory
  const [isDetails, setIsDetails] = useState(true);
  const [isHealthHistory, setisHealthHistory] = useState(false);

  // State: History SubPages
  const [isAlerts, setIsAlerts] = useState(true);
  const [isAllergies, setIsAllergies] = useState(false);
  const [isComplications, setIsComplications] = useState(false);
  const [isDiagnosis, setIsDiagnosis] = useState(false);
  const [isFindings, setIsFindings] = useState(false);
  const [isComplaint, setIsComplaint] = useState(false);
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

  // onClick: Renders Details SubPage
  function renderDetails() {
    setIsAlerts(false);
    setIsAllergies(false);
    setIsComplaint(false);
    setIsComplications(false);
    setIsDiagnosis(false);
    setIsFindings(false);
    setisHealthHistory(false);
    setIsProcedures(false);
    setIsSymptoms(false);
    setIsDetails(true);
  }

  // onClick: Renders History SubPage
  function renderHealthHistory() {
    setIsAllergies(false);
    setIsComplaint(false);
    setIsComplications(false);
    setIsDetails(false);
    setIsDiagnosis(false);
    setIsFindings(false);
    setIsProcedures(false);
    setIsSymptoms(false);
    setIsAlerts(true);
    setisHealthHistory(true);
  }

  // onClick: Renders Alerts SubPage
  function renderAlerts() {
    setIsAllergies(false);
    setIsComplaint(false);
    setIsComplications(false);
    setIsDetails(false);
    setIsDiagnosis(false);
    setIsFindings(false);
    setIsProcedures(false);
    setIsSymptoms(false);
    setIsAlerts(true);
    setisHealthHistory(true);
  }

  // onClick: Renders Allergies SubPage
  function renderAllergies() {
    setIsAlerts(false);
    setIsComplaint(false);
    setIsComplications(false);
    setIsDetails(false);
    setIsDiagnosis(false);
    setIsFindings(false);
    setIsProcedures(false);
    setIsSymptoms(false);
    setIsAllergies(true);
    setisHealthHistory(true);
  }

  // onClick: Renders Complications SubPage
  function renderComplications() {
    setIsAlerts(false);
    setIsAllergies(false);
    setIsComplaint(false);
    setIsDetails(false);
    setIsDiagnosis(false);
    setIsFindings(false);
    setIsProcedures(false);
    setIsSymptoms(false);
    setIsComplications(true);
    setisHealthHistory(true);
  }

  // onClick: Renders Diagnosis SubPage
  function renderDiagnosis() {
    setIsAlerts(false);
    setIsAllergies(false);
    setIsComplaint(false);
    setIsComplications(false);
    setIsDetails(false);
    setIsFindings(false);
    setIsProcedures(false);
    setIsSymptoms(false);
    setIsDiagnosis(true);
    setisHealthHistory(true);
  }

  // onClick: Renders Findings SubPage
  function renderFindings() {
    setIsAlerts(false);
    setIsAllergies(false);
    setIsComplaint(false);
    setIsComplications(false);
    setIsDetails(false);
    setIsDiagnosis(false);
    setIsProcedures(false);
    setIsSymptoms(false);
    setIsFindings(true);
    setisHealthHistory(true);
  }

  // onClick: Renders Complaint SubPage
  function renderComplaint() {
    setIsAlerts(false);
    setIsAllergies(false);
    setIsComplications(false);
    setIsDetails(false);
    setIsDiagnosis(false);
    setIsFindings(false);
    setIsProcedures(false);
    setIsSymptoms(false);
    setIsComplaint(true);
    setisHealthHistory(true);
  }

  // onClick: Renders Procedures SubPage
  function renderProcedures() {
    setIsAlerts(false);
    setIsAllergies(false);
    setIsComplaint(false);
    setIsComplications(false);
    setIsDetails(false);
    setIsDiagnosis(false);
    setIsFindings(false);
    setIsSymptoms(false);
    setisHealthHistory(true);
    setIsProcedures(true);
  }

  // onClick: Renders Symptoms SubPage
  function renderSymptoms() {
    setIsAlerts(false);
    setIsAllergies(false);
    setIsComplaint(false);
    setIsComplications(false);
    setIsDetails(false);
    setIsDiagnosis(false);
    setIsFindings(false);
    setIsProcedures(false);
    setisHealthHistory(true);
    setIsSymptoms(true);
  }

  return (
    <>
      <Container data-testid={"overview"}>
        <Wrapper>
          <PageTitle
            heading="Overview"
            subheading="Patient details and history"
          />

          <ContentWrapper>
            <ReportSection
              primaryNavigation={
                <PrimaryNavigation>
                  <PrimaryNavigation.Item
                    isActive={isDetails ? true : false}
                    onClick={renderDetails}
                  >
                    <PrimaryNavigation.Text>Details</PrimaryNavigation.Text>
                  </PrimaryNavigation.Item>

                  <PrimaryNavigation.Item
                    isActive={isHealthHistory ? true : false}
                    onClick={renderHealthHistory}
                  >
                    <PrimaryNavigation.Text>
                      Health History
                    </PrimaryNavigation.Text>
                  </PrimaryNavigation.Item>
                </PrimaryNavigation>
              }
              secondaryNavigation={
                <SecondaryNavigation>
                  {isDetails ? (
                    <>
                      <SecondaryNavigation.Item
                        isActive={isDetails ? true : false}
                      >
                        <SecondaryNavigation.Icon>
                          <DetailsIcon />
                        </SecondaryNavigation.Icon>
                        <SecondaryNavigation.Text>
                          Details
                        </SecondaryNavigation.Text>
                      </SecondaryNavigation.Item>
                    </>
                  ) : isHealthHistory ? (
                    <>
                      {windowDimensions.width <= 1470 ? (
                        <SecondaryNavigation.Item>
                          <SecondaryNavigation.Icon>
                            <MoreIcon />
                          </SecondaryNavigation.Icon>
                          <SecondaryNavigation.Text>
                            More
                          </SecondaryNavigation.Text>
                        </SecondaryNavigation.Item>
                      ) : null}

                      <SecondaryNavigation.Item
                        isActive={isAlerts ? true : false}
                        onClick={renderAlerts}
                      >
                        <SecondaryNavigation.Icon
                          isRed={
                            patientAlerts && patientAlerts.length > 0
                              ? true
                              : false
                          }
                        >
                          <AlertsIcon />
                        </SecondaryNavigation.Icon>
                        <SecondaryNavigation.Text>
                          Alerts
                        </SecondaryNavigation.Text>
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
                            patientConditions.category === "Complications" &&
                            patientConditions.length > 0
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
                            patientConditions.category === "Diagnosis" &&
                            patientConditions.length > 0
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
                                patientConditions.category === "Findings" &&
                                patientConditions.length > 0
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
                            isActive={isComplaint ? true : false}
                            onClick={renderComplaint}
                          >
                            <SecondaryNavigation.Icon
                              isRed={
                                patientConditions &&
                                patientConditions.category === "Complaint" &&
                                patientConditions.length > 0
                                  ? true
                                  : false
                              }
                            >
                              <ComplaintIcon />
                            </SecondaryNavigation.Icon>
                            <SecondaryNavigation.Text>
                              Complaint
                            </SecondaryNavigation.Text>
                          </SecondaryNavigation.Item>

                          <SecondaryNavigation.Item
                            isActive={isProcedures ? true : false}
                            onClick={renderProcedures}
                          >
                            <SecondaryNavigation.Icon
                              isRed={
                                patientConditions &&
                                patientConditions.category === "Procedures" &&
                                patientConditions.length > 0
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
                                patientConditions.category === "Symptoms" &&
                                patientConditions.length > 0
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
                    </>
                  ) : (
                    <>
                      <SecondaryNavigation.Item>
                        <SecondaryNavigation.Icon>
                          <DetailsIcon />
                        </SecondaryNavigation.Icon>
                        <SecondaryNavigation.Text>
                          Details
                        </SecondaryNavigation.Text>
                      </SecondaryNavigation.Item>
                    </>
                  )}
                </SecondaryNavigation>
              }
              content={
                isDetails ? (
                  <Details />
                ) : isAlerts ? (
                  <Alerts />
                ) : isAllergies ? (
                  <Allergies />
                ) : isComplications ? (
                  <Complications />
                ) : isDiagnosis ? (
                  <Diagnosis />
                ) : isFindings ? (
                  <Findings />
                ) : isComplaint ? (
                  <Complaint />
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
