// Import: Packages
import React, { useState } from "react";

// Import: Assets
import { ReactComponent as DetailsIcon } from "../../../assets/img/icon/patient.svg";

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
import { Details, History } from "./subPages";

// Component: Overview
export default function Overview() {
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

  // onClick: Renders Details SubPage
  function renderDetails() {
    setIsHistory(false);
    setIsDetails(true);
  }

  // onClick: Renders History SubPage
  function renderHistory() {
    setIsDetails(false);
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
                  <PrimaryNavigation.Item onClick={renderDetails}>
                    <PrimaryNavigation.Text>Details</PrimaryNavigation.Text>
                  </PrimaryNavigation.Item>

                  <PrimaryNavigation.Item onClick={renderHistory}>
                    <PrimaryNavigation.Text>History</PrimaryNavigation.Text>
                  </PrimaryNavigation.Item>
                </PrimaryNavigation>
              }
              secondaryNavigation={
                <SecondaryNavigation>
                  {isDetails ? (
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
                  ) : isHistory ? (
                    <>
                      <SecondaryNavigation.Item>
                        <SecondaryNavigation.Icon>
                          <DetailsIcon />
                        </SecondaryNavigation.Icon>
                        <SecondaryNavigation.Text>
                          Alerts
                        </SecondaryNavigation.Text>
                      </SecondaryNavigation.Item>

                      <SecondaryNavigation.Item>
                        <SecondaryNavigation.Icon>
                          <DetailsIcon />
                        </SecondaryNavigation.Icon>
                        <SecondaryNavigation.Text>
                          Allergies
                        </SecondaryNavigation.Text>
                      </SecondaryNavigation.Item>

                      <SecondaryNavigation.Item>
                        <SecondaryNavigation.Icon>
                          <DetailsIcon />
                        </SecondaryNavigation.Icon>
                        <SecondaryNavigation.Text>
                          Complications
                        </SecondaryNavigation.Text>
                      </SecondaryNavigation.Item>

                      <SecondaryNavigation.Item>
                        <SecondaryNavigation.Icon>
                          <DetailsIcon />
                        </SecondaryNavigation.Icon>
                        <SecondaryNavigation.Text>
                          Diagnosis
                        </SecondaryNavigation.Text>
                      </SecondaryNavigation.Item>

                      <SecondaryNavigation.Item>
                        <SecondaryNavigation.Icon>
                          <DetailsIcon />
                        </SecondaryNavigation.Icon>
                        <SecondaryNavigation.Text>
                          Findings
                        </SecondaryNavigation.Text>
                      </SecondaryNavigation.Item>

                      <SecondaryNavigation.Item>
                        <SecondaryNavigation.Icon>
                          <DetailsIcon />
                        </SecondaryNavigation.Icon>
                        <SecondaryNavigation.Text>
                          Complaint
                        </SecondaryNavigation.Text>
                      </SecondaryNavigation.Item>

                      <SecondaryNavigation.Item>
                        <SecondaryNavigation.Icon>
                          <DetailsIcon />
                        </SecondaryNavigation.Icon>
                        <SecondaryNavigation.Text>
                          Procedures
                        </SecondaryNavigation.Text>
                      </SecondaryNavigation.Item>

                      <SecondaryNavigation.Item>
                        <SecondaryNavigation.Icon>
                          <DetailsIcon />
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
              content={isDetails ? <Details /> : isHistory ? <History /> : null}
            />
          </ContentWrapper>
        </Wrapper>
      </Container>
    </>
  );
}
