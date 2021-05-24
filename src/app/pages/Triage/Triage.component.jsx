// Import: Packages
import React, { useState } from "react";

// Import: Assets

import { ReactComponent as AllergiesIcon } from "../../../assets/img/icon/allergies.svg";
import { ReactComponent as AlertsIcon } from "../../../assets/img/icon/alerts.svg";
import { ReactComponent as CEDIcon } from "../../../assets/img/icon/assessments-observations.svg";
import { ReactComponent as NeuroObsIcon } from "../../../assets/img/icon/neuroObs.svg";
import { ReactComponent as NEWSIcon } from "../../../assets/img/icon/NEWS.svg";
import { ReactComponent as POPSHistoryIcon } from "../../../assets/img/icon/popsHistory.svg";
import { ReactComponent as SaveIcon } from "../../../assets/img/icon/save.svg";
import { ReactComponent as TriageIcon } from "../../../assets/img/icon/assessments-triage.svg";
import { ReactComponent as UrineObsIcon } from "../../../assets/img/icon/urineObs.svg";

// Import: Elements
import { Container, ContentWrapper, Header, Wrapper } from "./Triage.elements";

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
  CEDObs,
  NeuroObs,
  NEWS2,
  POPSHistory,
  UrineObs,
  TriageAndStream,
  Save,
} from "./subPages";

// Page: Triage
export default function Triage() {
  // State: isTriage, isPaediatricObs, isPOPSHistory, isNEWS, isSave
  const [isTriage, setIsTriage] = useState(true);
  const [isPaediatricObs, setIsPaediatricObs] = useState(false);
  const [isPOPSHistory, setIsPOPSHistory] = useState(false);
  const [isNEWS, setIsNEWS] = useState(false);
  const [isSave, setIsSave] = useState(false);

  // State: Triage SubPages
  const [isTriageAndStream, setIsTriageAndStream] = useState(true);
  const [isAlerts, setIsAlerts] = useState(false);
  const [isAllergies, setIsAllergies] = useState(false);
  const [isCEDObs, setIsCEDObs] = useState(false);
  const [isNeuroObs, setIsNeuroObs] = useState(false);
  const [isUrineObs, setIsUrineObs] = useState(false);
  const [isPOPSHistorySubPage, setISPOPSHistorySubPage] = useState(false);
  const [isNEWS2, setIsNEWS2] = useState(false);

  // onClick: Renders Triage SubPage
  function renderTriage() {
    setIsAlerts(false);
    setIsAllergies(false);
    setIsCEDObs(false);
    setIsNeuroObs(false);
    setIsNEWS(false);
    setIsNEWS2(false);
    setIsPaediatricObs(false);
    setIsPOPSHistory(false);
    setISPOPSHistorySubPage(false);
    setIsSave(false);
    setIsSaveSubPage(false);
    setIsUrineObs(false);
    setIsTriage(true);
    setIsTriageAndStream(true);
  }

  // onClick: Renders PaediatricObs SubPage
  function renderPaediatricObs() {
    setIsAlerts(false);
    setIsAllergies(false);
    setIsNeuroObs(false);
    setIsNEWS(false);
    setIsNEWS2(false);
    setIsPOPSHistory(false);
    setISPOPSHistorySubPage(false);
    setIsSave(false);
    setIsSaveSubPage(false);
    setIsTriage(false);
    setIsTriageAndStream(false);
    setIsUrineObs(false);
    setIsSave(false);
    setIsCEDObs(true);
    setIsPaediatricObs(true);
  }

  // onClick: Renders POPSHistory SubPage
  function renderPOPSHistory() {
    setIsAlerts(false);
    setIsAllergies(false);
    setIsCEDObs(false);
    setIsNeuroObs(false);
    setIsNEWS(false);
    setIsNEWS2(false);
    setIsPaediatricObs(false);
    setIsSave(false);
    setIsSaveSubPage(false);
    setIsTriage(false);
    setIsTriageAndStream(false);
    setIsUrineObs(false);
    setIsPOPSHistory(true);
    setISPOPSHistorySubPage(true);
  }

  // onClick: Renders NEWS SubPage
  function renderNEWS() {
    setIsAlerts(false);
    setIsAllergies(false);
    setIsCEDObs(false);
    setIsNeuroObs(false);
    setIsPaediatricObs(false);
    setIsPOPSHistory(false);
    setISPOPSHistorySubPage(false);
    setIsTriage(false);
    setIsTriageAndStream(false);
    setIsSave(false);
    setIsSaveSubPage(false);
    setIsUrineObs(false);
    setIsNEWS(true);
    setIsNEWS2(true);
  }

  // onClick: Renders TriageAndStream SubPage
  function renderTriageAndStream() {
    setIsAlerts(false);
    setIsAllergies(false);
    setIsCEDObs(false);
    setIsNeuroObs(false);
    setIsNEWS(false);
    setIsNEWS2(false);
    setIsPaediatricObs(false);
    setIsPOPSHistory(false);
    setISPOPSHistorySubPage(false);
    setIsSave(false);
    setIsSaveSubPage(false);
    setIsUrineObs(false);
    setIsTriage(true);
    setIsTriageAndStream(true);
  }

  // onClick: Renders Alerts SubPage
  function renderAlerts() {
    setIsAllergies(false);
    setIsCEDObs(false);
    setIsNeuroObs(false);
    setIsNEWS(false);
    setIsNEWS2(false);
    setIsTriageAndStream(false);
    setIsPaediatricObs(false);
    setIsPOPSHistory(false);
    setISPOPSHistorySubPage(false);
    setIsSave(false);
    setIsSaveSubPage(false);
    setIsUrineObs(false);
    setIsAlerts(true);
    setIsTriage(true);
  }

  // onClick: Renders Allergies SubPage
  function renderAllergies() {
    setIsAlerts(false);
    setIsCEDObs(false);
    setIsNeuroObs(false);
    setIsNEWS(false);
    setIsNEWS2(false);
    setIsPaediatricObs(false);
    setIsPOPSHistory(false);
    setISPOPSHistorySubPage(false);
    setIsSave(false);
    setIsSaveSubPage(false);
    setIsTriageAndStream(false);
    setIsUrineObs(false);
    setIsAllergies(true);
    setIsTriage(true);
  }

  // onClick: Renders CEDObs SubPage
  function renderCEDObs() {
    setIsAlerts(false);
    setIsAllergies(false);
    setIsNeuroObs(false);
    setIsNEWS(false);
    setIsNEWS2(false);
    setIsPOPSHistory(false);
    setISPOPSHistorySubPage(false);
    setIsSave(false);
    setIsSaveSubPage(false);
    setIsTriage(false);
    setIsTriageAndStream(false);
    setIsUrineObs(false);
    setIsSave(false);
    setIsCEDObs(true);
    setIsPaediatricObs(true);
  }

  // onClick: Renders NeuroObs SubPage
  function renderNeuroObs() {
    setIsAlerts(false);
    setIsAllergies(false);
    setIsCEDObs(false);
    setIsNEWS(false);
    setIsNEWS2(false);
    setIsPOPSHistory(false);
    setISPOPSHistorySubPage(false);
    setIsSave(false);
    setIsSaveSubPage(false);
    setIsTriage(false);
    setIsTriageAndStream(false);
    setIsUrineObs(false);
    setIsSave(false);
    setIsNeuroObs(true);
    setIsPaediatricObs(true);
  }

  // onClick: Renders UrineObs SubPage
  function renderUrineObs() {
    setIsAlerts(false);
    setIsAllergies(false);
    setIsCEDObs(false);
    setIsNeuroObs(false);
    setIsNEWS(false);
    setIsNEWS2(false);
    setIsPOPSHistory(false);
    setISPOPSHistorySubPage(false);
    setIsSave(false);
    setIsSaveSubPage(false);
    setIsTriage(false);
    setIsTriageAndStream(false);
    setIsPaediatricObs(true);
    setIsUrineObs(true);
  }

  // onClick: Renders NEWS2 SubPage
  function renderNEWS2() {
    setIsAlerts(false);
    setIsAllergies(false);
    setIsCEDObs(false);
    setIsNeuroObs(false);
    setIsPaediatricObs(false);
    setIsPOPSHistory(false);
    setISPOPSHistorySubPage(false);
    setIsSave(false);
    setIsSaveSubPage(false);
    setIsTriage(false);
    setIsTriageAndStream(false);
    setIsUrineObs(false);
    setIsSave(false);
    setIsNEWS(true);
    setIsNEWS2(true);
  }

  // onClick: Renders Save SubPage
  function renderSave() {
    setIsAlerts(false);
    setIsAllergies(false);
    setIsCEDObs(false);
    setIsNeuroObs(false);
    setIsNEWS(false);
    setIsNEWS2(false);
    setIsPaediatricObs(false);
    setIsPOPSHistory(false);
    setISPOPSHistorySubPage(false);
    setIsTriage(false);
    setIsTriageAndStream(false);
    setIsUrineObs(false);
    setIsSave(true);
    setIsSaveSubPage(true);
  }

  return (
    <>
      <Container data-testid={"triage"}>
        <Wrapper>
          <Header>
            <h2>Triage</h2>
            <span>View Triage and POPS score</span>
          </Header>

          <PatientDemographics />

          <ContentWrapper>
            <ReportSection
              primaryNavigation={
                <PrimaryNavigation>
                  <PrimaryNavigation.Item
                    isActive={isTriage ? true : false}
                    onClick={renderTriage}
                  >
                    <PrimaryNavigation.Text>Triage</PrimaryNavigation.Text>
                  </PrimaryNavigation.Item>

                  <PrimaryNavigation.Item
                    isActive={isPaediatricObs ? true : false}
                    onClick={renderPaediatricObs}
                  >
                    <PrimaryNavigation.Text>POPS Score</PrimaryNavigation.Text>
                  </PrimaryNavigation.Item>

                  <PrimaryNavigation.Item
                    isActive={isPOPSHistory ? true : false}
                    onClick={renderPOPSHistory}
                  >
                    <PrimaryNavigation.Text>
                      POPS History
                    </PrimaryNavigation.Text>
                  </PrimaryNavigation.Item>

                  <PrimaryNavigation.Item
                    isActive={isNEWS ? true : false}
                    onClick={renderNEWS}
                  >
                    <PrimaryNavigation.Text>NEWS</PrimaryNavigation.Text>
                  </PrimaryNavigation.Item>

                  <PrimaryNavigation.Item
                    isActive={isSave ? true : false}
                    onClick={renderSave}
                  >
                    <PrimaryNavigation.Save>
                      <PrimaryNavigation.Text>Save</PrimaryNavigation.Text>
                    </PrimaryNavigation.Save>
                  </PrimaryNavigation.Item>
                </PrimaryNavigation>
              }
              secondaryNavigation={
                <SecondaryNavigation>
                  {isTriage ? (
                    <>
                      <SecondaryNavigation.Item
                        isActive={isTriageAndStream ? true : false}
                        onClick={renderTriageAndStream}
                      >
                        <SecondaryNavigation.Icon>
                          <TriageIcon />
                        </SecondaryNavigation.Icon>
                        <SecondaryNavigation.Text>
                          Triage
                        </SecondaryNavigation.Text>
                      </SecondaryNavigation.Item>

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
                    </>
                  ) : isPaediatricObs ? (
                    <>
                      <SecondaryNavigation.Item
                        isActive={isCEDObs ? true : false}
                        onClick={renderCEDObs}
                      >
                        <SecondaryNavigation.Icon>
                          <CEDIcon />
                        </SecondaryNavigation.Icon>
                        <SecondaryNavigation.Text>
                          CED Obs
                        </SecondaryNavigation.Text>
                      </SecondaryNavigation.Item>

                      <SecondaryNavigation.Item
                        isActive={isNeuroObs ? true : false}
                        onClick={renderNeuroObs}
                      >
                        <SecondaryNavigation.Icon>
                          <NeuroObsIcon />
                        </SecondaryNavigation.Icon>
                        <SecondaryNavigation.Text>
                          Neuro Obs
                        </SecondaryNavigation.Text>
                      </SecondaryNavigation.Item>

                      <SecondaryNavigation.Item
                        isActive={isUrineObs ? true : false}
                        onClick={renderUrineObs}
                      >
                        <SecondaryNavigation.Icon>
                          <UrineObsIcon />
                        </SecondaryNavigation.Icon>
                        <SecondaryNavigation.Text>
                          Urine Obs
                        </SecondaryNavigation.Text>
                      </SecondaryNavigation.Item>
                    </>
                  ) : isPOPSHistory ? (
                    <>
                      <SecondaryNavigation.Item
                        isActive={isPOPSHistorySubPage ? true : false}
                        onClick={renderPOPSHistory}
                      >
                        <SecondaryNavigation.Icon>
                          <POPSHistoryIcon />
                        </SecondaryNavigation.Icon>
                        <SecondaryNavigation.Text>
                          POPS History
                        </SecondaryNavigation.Text>
                      </SecondaryNavigation.Item>
                    </>
                  ) : isNEWS ? (
                    <>
                      <SecondaryNavigation.Item
                        isActive={isNEWS2 ? true : false}
                        onClick={renderNEWS2}
                      >
                        <SecondaryNavigation.Icon>
                          <NEWSIcon />
                        </SecondaryNavigation.Icon>
                        <SecondaryNavigation.Text>
                          NEWS2
                        </SecondaryNavigation.Text>
                      </SecondaryNavigation.Item>
                    </>
                  ) : isSave ? (
                    <>
                      <SecondaryNavigation.Item
                        isActive={isSave ? true : false}
                        onClick={renderSave}
                      >
                        <SecondaryNavigation.Icon>
                          <SaveIcon />
                        </SecondaryNavigation.Icon>
                        <SecondaryNavigation.Text>
                          Save
                        </SecondaryNavigation.Text>
                      </SecondaryNavigation.Item>
                    </>
                  ) : null}
                </SecondaryNavigation>
              }
              content={
                isTriageAndStream ? (
                  <TriageAndStream />
                ) : isAlerts ? (
                  <Alerts />
                ) : isAllergies ? (
                  <Allergies />
                ) : isCEDObs ? (
                  <CEDObs />
                ) : isNeuroObs ? (
                  <NeuroObs />
                ) : isUrineObs ? (
                  <UrineObs />
                ) : isPOPSHistory ? (
                  <POPSHistory />
                ) : isNEWS2 ? (
                  <NEWS2 />
                ) : isSave ? (
                  <Save />
                ) : null
              }
            />
          </ContentWrapper>
        </Wrapper>
      </Container>
    </>
  );
}
