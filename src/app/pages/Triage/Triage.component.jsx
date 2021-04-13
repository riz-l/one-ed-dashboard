// Import: Packages
import React, { useState } from "react";

// Import: Assets
import { ReactComponent as DetailsIcon } from "../../../assets/img/icon/patient.svg";

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
  UrineObs,
  TriageAndStream,
} from "./subPages";

// Component: Triage
export default function Triage() {
  // State: isTriage, isPaediatricObs
  const [isTriage, setIsTriage] = useState(true);
  const [isPaediatricObs, setIsPaediatricObs] = useState(false);

  // State: Triage SubPages
  const [isTriageAndStream, setIsTriageAndStream] = useState(true);
  const [isAlerts, setIsAlerts] = useState(false);
  const [isAllergies, setIsAllergies] = useState(false);
  const [isCEDObs, setIsCEDObs] = useState(false);
  const [isNeuroObs, setIsNeuroObs] = useState(false);
  const [isUrineObs, setIsUrineObs] = useState(false);

  // onClick: Renders Triage SubPage
  function renderTriage() {
    setIsAlerts(false);
    setIsAllergies(false);
    setIsCEDObs(false);
    setIsNeuroObs(false);
    setIsUrineObs(false);
    setIsPaediatricObs(false);
    setIsTriage(true);
    setIsTriageAndStream(true);
  }

  // onClick: Renders PaediatricObs SubPage
  function renderPaediatricObs() {
    setIsAlerts(false);
    setIsAllergies(false);
    setIsNeuroObs(false);
    setIsTriage(false);
    setIsTriageAndStream(false);
    setIsUrineObs(false);
    setIsCEDObs(true);
    setIsPaediatricObs(true);
  }

  // onClick: Renders TriageAndStream SubPage
  function renderTriageAndStream() {
    setIsAlerts(false);
    setIsAllergies(false);
    setIsCEDObs(false);
    setIsNeuroObs(false);
    setIsPaediatricObs(false);
    setIsUrineObs(false);
    setIsTriage(true);
    setIsTriageAndStream(true);
  }

  // onClick: Renders Alerts SubPage
  function renderAlerts() {
    setIsAllergies(false);
    setIsCEDObs(false);
    setIsNeuroObs(false);
    setIsTriageAndStream(false);
    setIsPaediatricObs(false);
    setIsUrineObs(false);
    setIsAlerts(true);
    setIsTriage(true);
  }

  // onClick: Renders Allergies SubPage
  function renderAllergies() {
    setIsAlerts(false);
    setIsCEDObs(false);
    setIsNeuroObs(false);
    setIsTriageAndStream(false);
    setIsPaediatricObs(false);
    setIsUrineObs(false);
    setIsAllergies(true);
    setIsTriage(true);
  }

  // onClick: Renders CEDObs SubPage
  function renderCEDObs() {
    setIsAlerts(false);
    setIsAllergies(false);
    setIsNeuroObs(false);
    setIsTriage(false);
    setIsTriageAndStream(false);
    setIsUrineObs(false);
    setIsCEDObs(true);
    setIsPaediatricObs(true);
  }

  // onClick: Renders NeuroObs SubPage
  function renderNeuroObs() {
    setIsAlerts(false);
    setIsAllergies(false);
    setIsCEDObs(false);
    setIsTriage(false);
    setIsTriageAndStream(false);
    setIsUrineObs(false);
    setIsNeuroObs(true);
    setIsPaediatricObs(true);
  }

  // onClick: Renders UrineObs SubPage
  function renderUrineObs() {
    setIsAlerts(false);
    setIsAllergies(false);
    setIsCEDObs(false);
    setIsNeuroObs(false);
    setIsTriage(false);
    setIsTriageAndStream(false);
    setIsPaediatricObs(true);
    setIsUrineObs(true);
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
                          <DetailsIcon />
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
                          <DetailsIcon />
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
                          <DetailsIcon />
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
                          <DetailsIcon />
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
                          <DetailsIcon />
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
                          <DetailsIcon />
                        </SecondaryNavigation.Icon>
                        <SecondaryNavigation.Text>
                          Urine Obs
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
                ) : null
              }
            />
          </ContentWrapper>
        </Wrapper>
      </Container>
    </>
  );
}
