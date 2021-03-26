// Import: Packages
import React, { useState } from "react";

// Import: Assets
import { ReactComponent as AlertsIcon } from "../../../assets/img/icon/alerts.svg";
import { ReactComponent as AllergiesIcon } from "../../../assets/img/icon/allergies.svg";
import { ReactComponent as ComplaintIcon } from "../../../assets/img/icon/presenting-complaint.svg";
import { ReactComponent as ComplicationsIcon } from "../../../assets/img/icon/complications.svg";
import { ReactComponent as DetailsIcon } from "../../../assets/img/icon/patient.svg";
import { ReactComponent as DiagnosisIcon } from "../../../assets/img/icon/assessments-seen.svg";
import { ReactComponent as FindingsIcon } from "../../../assets/img/icon/findings.svg";
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
  PrimaryNavigation,
  ReportSection,
  SecondaryNavigation,
} from "../../components";
import { Alerts, Allergies, Details } from "./subPages";

// Component: Overview
export default function Overview() {
  // State: isDetails, isHistory
  const [isDetails, setIsDetails] = useState(true);
  const [isHistory, setIsHistory] = useState(false);

  // State: History SubPages
  const [isAlerts, setIsAlerts] = useState(true);
  const [isAllergies, setIsAllergies] = useState(false);
  // const [isComplications, setIsComplications] = useState(false);
  // const [isDiagnosis, setIsDiagnosis] = useState(false);
  // const [isFindings, setIsFindings] = useState(false);
  // const [isComplaint, setIsComplaint] = useState(false);
  // const [isProcedures, setIsProcedures] = useState(false);
  // const [isSymptoms, setIsSymptoms] = useState(false);

  // onClick: Renders Details SubPage
  function renderDetails() {
    setIsAlerts(false);
    setIsAllergies(false);
    setIsHistory(false);
    setIsDetails(true);
  }

  // onClick: Renders History SubPage
  function renderHistory() {
    setIsAllergies(false);
    setIsDetails(false);
    setIsAlerts(true);
    setIsHistory(true);
  }

  // onClick: Renders Alerts SubPage
  function renderAlerts() {
    setIsAllergies(false);
    setIsDetails(false);
    setIsAlerts(true);
    setIsHistory(true);
  }

  // onClick: Renders Allergies SubPage
  function renderAllergies() {
    setIsAlerts(false);
    setIsDetails(false);
    setIsAllergies(true);
    setIsHistory(true);
  }

  return (
    <>
      <Container data-testid={"overview"}>
        <Wrapper>
          <Header>
            <h2>Overview</h2>
            <span>Patient details and history</span>
          </Header>

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

                      <SecondaryNavigation.Item>
                        <SecondaryNavigation.Icon>
                          <ComplicationsIcon />
                        </SecondaryNavigation.Icon>
                        <SecondaryNavigation.Text>
                          Complications
                        </SecondaryNavigation.Text>
                      </SecondaryNavigation.Item>

                      <SecondaryNavigation.Item>
                        <SecondaryNavigation.Icon>
                          <DiagnosisIcon />
                        </SecondaryNavigation.Icon>
                        <SecondaryNavigation.Text>
                          Diagnosis
                        </SecondaryNavigation.Text>
                      </SecondaryNavigation.Item>

                      <SecondaryNavigation.Item>
                        <SecondaryNavigation.Icon>
                          <FindingsIcon />
                        </SecondaryNavigation.Icon>
                        <SecondaryNavigation.Text>
                          Findings
                        </SecondaryNavigation.Text>
                      </SecondaryNavigation.Item>

                      <SecondaryNavigation.Item>
                        <SecondaryNavigation.Icon>
                          <ComplaintIcon />
                        </SecondaryNavigation.Icon>
                        <SecondaryNavigation.Text>
                          Complaint
                        </SecondaryNavigation.Text>
                      </SecondaryNavigation.Item>

                      <SecondaryNavigation.Item>
                        <SecondaryNavigation.Icon>
                          <ProceduresIcon />
                        </SecondaryNavigation.Icon>
                        <SecondaryNavigation.Text>
                          Procedures
                        </SecondaryNavigation.Text>
                      </SecondaryNavigation.Item>

                      <SecondaryNavigation.Item>
                        <SecondaryNavigation.Icon>
                          <SymptomsIcon />
                        </SecondaryNavigation.Icon>
                        <SecondaryNavigation.Text>
                          Symptoms
                        </SecondaryNavigation.Text>
                      </SecondaryNavigation.Item>
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
                ) : null
              }
            />
          </ContentWrapper>
        </Wrapper>
      </Container>
    </>
  );
}
