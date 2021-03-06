// Import: Packages
import React, { useState } from "react";

// Import: Assets
import { ReactComponent as AmbulanceIcon } from "../../../assets/img/icon/ambulance.svg";
import { ReactComponent as ChartIcon } from "../../../assets/img/icon/chart.svg";
import { ReactComponent as GpConnectIcon } from "../../../assets/img/icon/gp-connect.svg";
import { ReactComponent as IceIcon } from "../../../assets/img/icon/ice.svg";
import { ReactComponent as NotesIcon } from "../../../assets/img/icon/notes.svg";
import { ReactComponent as PacsIcon } from "../../../assets/img/icon/pacs.svg";
import { ReactComponent as PopsHistoryIcon } from "../../../assets/img/icon/popsHistory.svg";
import { ReactComponent as SaveIcon } from "../../../assets/img/icon/save.svg";

// Import: Elements
import { Container, ContentWrapper, Wrapper } from "./ClinicalNotes.elements";

// Import: Components, subPages
import {
  PageTitle,
  PatientDemographics,
  PrimaryNavigation,
  ReportSection,
  SecondaryNavigation,
} from "../../components";
import {
  Ambulance,
  Chart,
  GPConnect,
  Ice,
  Notes,
  Pacs,
  POPSHistory,
  Save,
} from "./subPages";

// Page: ClinicalNotes
export default function ClinicalNotes() {
  // State: Local state
  const [isAmbulance, setIsAmbulance] = useState(false);
  const [isChart, setIsChart] = useState(false);
  const [isGpConnect, setIsGpConnect] = useState(false);
  const [isIce, setIsIce] = useState(false);
  const [isIntegration, setIsIntegration] = useState(false);
  const [isNotes, setIsNotes] = useState(true);
  const [isPacs, setIsPacs] = useState(false);
  const [isPopsHistory, setIsPopsHistory] = useState(false);
  const [isPopsHistorySubPage, setIsPopsHistorySubPage] = useState(false);
  const [isSave, setIsSave] = useState(false);

  // onClick: Functions for rendering subPages
  function renderAmbulance() {
    setIsAmbulance(true);
    setIsChart(false);
    setIsGpConnect(false);
    setIsIce(false);
    setIsIntegration(true);
    setIsNotes(false);
    setIsPacs(false);
    setIsPopsHistory(false);
    setIsPopsHistorySubPage(false);
    setIsSave(false);
  }
  function renderChart() {
    setIsAmbulance(false);
    setIsChart(true);
    setIsGpConnect(false);
    setIsIce(false);
    setIsIntegration(false);
    setIsNotes(false);
    setIsPacs(false);
    setIsPopsHistory(true);
    setIsPopsHistorySubPage(false);
    setIsSave(false);
  }
  function renderGpConnect() {
    setIsAmbulance(false);
    setIsChart(false);
    setIsGpConnect(true);
    setIsIce(false);
    setIsIntegration(true);
    setIsNotes(false);
    setIsPacs(false);
    setIsPopsHistory(false);
    setIsPopsHistorySubPage(false);
    setIsSave(false);
  }
  function renderIce() {
    setIsAmbulance(false);
    setIsChart(false);
    setIsGpConnect(false);
    setIsIce(true);
    setIsIntegration(true);
    setIsNotes(false);
    setIsPacs(false);
    setIsPopsHistory(false);
    setIsPopsHistorySubPage(false);
    setIsSave(false);
  }
  function renderNotes() {
    setIsAmbulance(false);
    setIsChart(false);
    setIsGpConnect(false);
    setIsIce(false);
    setIsIntegration(false);
    setIsNotes(true);
    setIsPacs(false);
    setIsPopsHistory(false);
    setIsPopsHistorySubPage(false);
    setIsSave(false);
  }
  function renderPacs() {
    setIsAmbulance(false);
    setIsChart(false);
    setIsGpConnect(false);
    setIsIce(false);
    setIsIntegration(true);
    setIsNotes(false);
    setIsPacs(true);
    setIsPopsHistory(false);
    setIsPopsHistorySubPage(false);
    setIsSave(false);
  }
  function renderObs() {
    setIsAmbulance(false);
    setIsChart(false);
    setIsGpConnect(false);
    setIsIce(false);
    setIsIntegration(false);
    setIsNotes(false);
    setIsPacs(false);
    setIsPopsHistory(true);
    setIsPopsHistorySubPage(true);
    setIsSave(false);
  }
  function renderSave() {
    setIsAmbulance(false);
    setIsChart(false);
    setIsGpConnect(false);
    setIsIce(false);
    setIsIntegration(false);
    setIsNotes(false);
    setIsPacs(false);
    setIsPopsHistory(false);
    setIsPopsHistorySubPage(false);
    setIsSave(true);
  }

  return (
    <>
      <Container data-testid={"clinicalNotes"}>
        <Wrapper>
          <PageTitle
            heading="Clinical Notes"
            subheading="View clinician summaries and note entries"
          />

          <PatientDemographics />

          <ContentWrapper>
            <ReportSection
              primaryNavigation={
                <PrimaryNavigation>
                  <PrimaryNavigation.Item
                    isActive={isNotes ? true : false}
                    onClick={renderNotes}
                  >
                    <PrimaryNavigation.Text>Notes</PrimaryNavigation.Text>
                  </PrimaryNavigation.Item>

                  <PrimaryNavigation.Item
                    isActive={isPopsHistory ? true : false}
                    onClick={renderObs}
                  >
                    <PrimaryNavigation.Text>
                      POPS History
                    </PrimaryNavigation.Text>
                  </PrimaryNavigation.Item>

                  <PrimaryNavigation.Item
                    isActive={isIntegration ? true : false}
                    onClick={renderIce}
                  >
                    <PrimaryNavigation.Text>Integration</PrimaryNavigation.Text>
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
                  {isNotes ? (
                    <>
                      <SecondaryNavigation.Item
                        isActive={isNotes ? true : false}
                      >
                        <SecondaryNavigation.Icon>
                          <NotesIcon />
                        </SecondaryNavigation.Icon>
                        <SecondaryNavigation.Text>
                          Notes
                        </SecondaryNavigation.Text>
                      </SecondaryNavigation.Item>
                    </>
                  ) : isPopsHistory ? (
                    <>
                      <SecondaryNavigation.Item
                        isActive={isPopsHistorySubPage ? true : false}
                        onClick={renderObs}
                      >
                        <SecondaryNavigation.Icon>
                          <PopsHistoryIcon />
                        </SecondaryNavigation.Icon>
                        <SecondaryNavigation.Text>
                          POPS History
                        </SecondaryNavigation.Text>
                      </SecondaryNavigation.Item>

                      <SecondaryNavigation.Item
                        isActive={isChart ? true : false}
                        onClick={renderChart}
                      >
                        <SecondaryNavigation.Icon>
                          <ChartIcon />
                        </SecondaryNavigation.Icon>
                        <SecondaryNavigation.Text>
                          Chart
                        </SecondaryNavigation.Text>
                      </SecondaryNavigation.Item>
                    </>
                  ) : isIntegration ? (
                    <>
                      <SecondaryNavigation.Item
                        isActive={isIce ? true : false}
                        onClick={renderIce}
                      >
                        <SecondaryNavigation.Icon>
                          <IceIcon />
                        </SecondaryNavigation.Icon>
                        <SecondaryNavigation.Text>ICE</SecondaryNavigation.Text>
                      </SecondaryNavigation.Item>

                      <SecondaryNavigation.Item
                        isActive={isPacs ? true : false}
                        onClick={renderPacs}
                      >
                        <SecondaryNavigation.Icon>
                          <PacsIcon />
                        </SecondaryNavigation.Icon>
                        <SecondaryNavigation.Text>
                          PACS
                        </SecondaryNavigation.Text>
                      </SecondaryNavigation.Item>

                      <SecondaryNavigation.Item
                        isActive={isGpConnect ? true : false}
                        onClick={renderGpConnect}
                      >
                        <SecondaryNavigation.Icon>
                          <GpConnectIcon />
                        </SecondaryNavigation.Icon>
                        <SecondaryNavigation.Text>
                          GP Connect
                        </SecondaryNavigation.Text>
                      </SecondaryNavigation.Item>

                      <SecondaryNavigation.Item
                        isActive={isAmbulance ? true : false}
                        onClick={renderAmbulance}
                      >
                        <SecondaryNavigation.Icon>
                          <AmbulanceIcon />
                        </SecondaryNavigation.Icon>
                        <SecondaryNavigation.Text>
                          Ambulance Integration
                        </SecondaryNavigation.Text>
                      </SecondaryNavigation.Item>
                    </>
                  ) : isSave ? (
                    <SecondaryNavigation.Item
                      isActive={isSave ? true : false}
                      onClick={renderSave}
                    >
                      <SecondaryNavigation.Icon>
                        <SaveIcon />
                      </SecondaryNavigation.Icon>
                      <SecondaryNavigation.Text>Save</SecondaryNavigation.Text>
                    </SecondaryNavigation.Item>
                  ) : null}
                </SecondaryNavigation>
              }
              content={
                isNotes ? (
                  <Notes />
                ) : isPopsHistorySubPage ? (
                  <POPSHistory />
                ) : isChart ? (
                  <Chart />
                ) : isIce ? (
                  <Ice />
                ) : isPacs ? (
                  <Pacs />
                ) : isGpConnect ? (
                  <GPConnect />
                ) : isAmbulance ? (
                  <Ambulance />
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
