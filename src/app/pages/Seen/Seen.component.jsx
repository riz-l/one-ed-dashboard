// Import: Packages
import React, { useState } from "react";

// Import: Assets
import { ReactComponent as SeenSubPageIcon } from "../../../assets/img/icon/assessments-seen.svg";

// Import: Elements
import { Container, ContentWrapper, Wrapper } from "./Seen.elements";

// Import: Components & SubPages
import {
  PageTitle,
  PatientDemographics,
  PrimaryNavigation,
  ReportSection,
  SecondaryNavigation,
} from "../../components";
import { SeenSubPage } from "./SubPages/index";

// Page: Seen
export default function Seen() {
  // State: isSeen
  const [isSeen, setIsSeen] = useState(true);

  // State: Seen SubPage
  const [isSeenSubPage, setIsSeenSubPage] = useState(true);

  // onClick: Renders Seen Page
  function renderSeen() {
    setIsSeen(true);
    setIsSeenSubPage(true);
  }

  // onClick: Renders SeenSubPage
  function renderSeenSubPage() {
    setIsSeen(true);
    setIsSeenSubPage(true);
  }

  return (
    <>
      <Container data-testid={"seen"}>
        <Wrapper>
          <PageTitle
            heading="Seen"
            subheading="Clinician records seeing the patient"
          />

          <PatientDemographics />

          <ContentWrapper>
            <ReportSection
              primaryNavigation={
                <PrimaryNavigation>
                  <PrimaryNavigation.Item
                    isActive={isSeen ? true : false}
                    onClick={renderSeen}
                  >
                    <PrimaryNavigation.Text>Seen</PrimaryNavigation.Text>
                  </PrimaryNavigation.Item>
                </PrimaryNavigation>
              }
              secondaryNavigation={
                <SecondaryNavigation>
                  {isSeen ? (
                    <>
                      <SecondaryNavigation.Item
                        isActive={isSeenSubPage ? true : false}
                        onClick={renderSeenSubPage}
                      >
                        <SecondaryNavigation.Icon>
                          <SeenSubPageIcon />
                        </SecondaryNavigation.Icon>
                        <SecondaryNavigation.Text>
                          Seen
                        </SecondaryNavigation.Text>
                      </SecondaryNavigation.Item>
                    </>
                  ) : null}
                </SecondaryNavigation>
              }
              content={isSeenSubPage ? <SeenSubPage /> : null}
            />
          </ContentWrapper>
        </Wrapper>
      </Container>
    </>
  );
}
