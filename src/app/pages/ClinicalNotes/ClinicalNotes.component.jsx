// Import: Packages
import React, { useState } from "react";

// Import: Assets
import { ReactComponent as ChartIcon } from "../../../assets/img/icon/chart.svg";
import { ReactComponent as GpConnectIcon } from "../../../assets/img/icon/gp-connect.svg";
import { ReactComponent as IceIcon } from "../../../assets/img/icon/ice.svg";
import { ReactComponent as NotesIcon } from "../../../assets/img/icon/notes.svg";
import { ReactComponent as ObsIcon } from "../../../assets/img/icon/obs.svg";
import { ReactComponent as PacsIcon } from "../../../assets/img/icon/pacs.svg";
import { ReactComponent as SaveIcon } from "../../../assets/img/icon/save.svg";

// Import: Elements
import { Container, ContentWrapper, Wrapper } from "./ClinicalNotes.elements";

// Import: Components, SubPages
import {
  PageTitle,
  PatientDemographics,
  PrimaryNavigation,
  ReportSection,
  SecondaryNavigation,
} from "../../components";
import { Chart, GPConnect, Ice, Notes, Obs, Pacs, Save } from "./subPages";

// Page: ClinicalNotes
export default function ClinicalNotes() {
  // State: isNotes, isObsHistory, isIntegration, isSave
  const [isNotes, setIsNotes] = useState(true);
  const [isObsHistory, setIsObsHistory] = useState(false);
  const [isIntegration, setIsIntegration] = useState(false);
  const [isSave, setIsSave] = useState(false);

  // State: Obs History SubPages
  const [isObs, setIsObs] = useState(false);
  const [isChart, setIsChart] = useState(false);

  // State: Integration SubPages
  const [isIce, setIsIce] = useState(false);
  const [isPacs, setIsPacs] = useState(false);
  const [isGpConnect, setIsGpConnect] = useState(false);

  // onClick: Renders Notes SubPage
  function renderNotes() {
    setIsObsHistory(false);
    setIsObs(false);
    setIsChart(false);
    setIsIntegration(false);
    setIsIce(false);
    setIsPacs(false);
    setIsGpConnect(false);
    setIsSave(false);
    setIsNotes(true);
  }

  // onClick: Renders Obs SubPage
  function renderObs() {
    setIsChart(false);
    setIsIntegration(false);
    setIsNotes(false);
    setIsChart(false);
    setIsIce(false);
    setIsPacs(false);
    setIsGpConnect(false);
    setIsSave(false);
    setIsObsHistory(true);
    setIsObs(true);
  }

  // onClick: Renders Chart SubPage
  function renderChart() {
    setIsChart(false);
    setIsIntegration(false);
    setIsNotes(false);
    setIsObs(false);
    setIsIce(false);
    setIsPacs(false);
    setIsGpConnect(false);
    setIsSave(false);
    setIsChart(true);
    setIsObsHistory(true);
  }

  // onClick: Renders ICE SubPage
  function renderIce() {
    setIsChart(false);
    setIsNotes(false);
    setIsObs(false);
    setIsPacs(false);
    setIsGpConnect(false);
    setIsChart(false);
    setIsObsHistory(false);
    setIsSave(false);
    setIsIce(true);
    setIsIntegration(true);
  }

  // onClick: Renders PACS SubPage
  function renderPacs() {
    setIsChart(false);
    setIsNotes(false);
    setIsObs(false);
    setIsGpConnect(false);
    setIsChart(false);
    setIsObsHistory(false);
    setIsIce(false);
    setIsSave(false);
    setIsPacs(true);
    setIsIntegration(true);
  }

  // onClick: Renders GP Connect SubPage
  function renderGpConnect() {
    setIsChart(false);
    setIsNotes(false);
    setIsObs(false);
    setIsPacs(false);
    setIsChart(false);
    setIsObsHistory(false);
    setIsIce(false);
    setIsSave(false);
    setIsGpConnect(true);
    setIsIntegration(true);
  }

  // onClick: Renders Save SubPage
  function renderSave() {
    setIsChart(false);
    setIsNotes(false);
    setIsObs(false);
    setIsPacs(false);
    setIsChart(false);
    setIsObsHistory(false);
    setIsIce(false);
    setIsGpConnect(false);
    setIsIntegration(false);
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
                    isActive={isObsHistory ? true : false}
                    onClick={renderObs}
                  >
                    <PrimaryNavigation.Text>Obs History</PrimaryNavigation.Text>
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
                  ) : isObsHistory ? (
                    <>
                      <SecondaryNavigation.Item
                        isActive={isObs ? true : false}
                        onClick={renderObs}
                      >
                        <SecondaryNavigation.Icon>
                          <ObsIcon />
                        </SecondaryNavigation.Icon>
                        <SecondaryNavigation.Text>Obs</SecondaryNavigation.Text>
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
                ) : isObs ? (
                  <Obs />
                ) : isChart ? (
                  <Chart />
                ) : isIce ? (
                  <Ice />
                ) : isPacs ? (
                  <Pacs />
                ) : isGpConnect ? (
                  <GPConnect />
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
