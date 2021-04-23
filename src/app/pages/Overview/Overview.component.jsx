// Import: Packages
import React, { useState, useEffect } from "react";
import Dexie from "dexie";

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
import {
  Container,
  ContentWrapper,
  Header,
  Wrapper,
} from "./Overview.elements";

// Import: Components, SubPages
import {
  PatientDemographics,
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
  // State: windowDimensions
  const [windowDimensions, setWindowDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  // State: isDetails, isHistory
  const [isDetails, setIsDetails] = useState(true);
  const [isHistory, setIsHistory] = useState(false);

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

  // onClick: Renders Details SubPage
  function renderDetails() {
    setIsAlerts(false);
    setIsAllergies(false);
    setIsComplaint(false);
    setIsComplications(false);
    setIsDiagnosis(false);
    setIsFindings(false);
    setIsHistory(false);
    setIsProcedures(false);
    setIsSymptoms(false);
    setIsDetails(true);
  }

  // onClick: Renders History SubPage
  function renderHistory() {
    setIsAllergies(false);
    setIsComplaint(false);
    setIsComplications(false);
    setIsDetails(false);
    setIsDiagnosis(false);
    setIsFindings(false);
    setIsProcedures(false);
    setIsSymptoms(false);
    setIsAlerts(true);
    setIsHistory(true);
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
    setIsHistory(true);
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
    setIsHistory(true);
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
    setIsHistory(true);
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
    setIsHistory(true);
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
    setIsHistory(true);
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
    setIsHistory(true);
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
    setIsHistory(true);
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
    setIsHistory(true);
    setIsSymptoms(true);
  }

  // Dexie: database = ODetails
  const detailsDb = new Dexie("ODetails");

  return (
    <>
      <Container data-testid={"overview"}>
        <Wrapper>
          <Header>
            <h2>Overview</h2>
            <span>Patient details and history</span>
          </Header>

          <PatientDemographics />

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
                    isActive={isHistory ? true : false}
                    onClick={renderHistory}
                  >
                    <PrimaryNavigation.Text>History</PrimaryNavigation.Text>
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
                  ) : isHistory ? (
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
                        <SecondaryNavigation.Icon>
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
                        <SecondaryNavigation.Icon>
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
                        <SecondaryNavigation.Icon>
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
                        <SecondaryNavigation.Icon>
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
                            <SecondaryNavigation.Icon>
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
                            <SecondaryNavigation.Icon>
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
                            <SecondaryNavigation.Icon>
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
                            <SecondaryNavigation.Icon>
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
                  <Details db={detailsDb} />
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
