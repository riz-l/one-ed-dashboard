// Import: Packages
import React, { useState } from "react";

// Import: Assets
import { ReactComponent as SaveIcon } from "../../../assets/img/icon/save.svg";
import { ReactComponent as SeenSubPageIcon } from "../../../assets/img/icon/assessments-seen.svg";

// Import: Elements
import { Container, ContentWrapper, Wrapper } from "./Seen.elements";

// Import: Components, subPages
import {
  PageTitle,
  PatientDemographics,
  PrimaryNavigation,
  ReportSection,
  SecondaryNavigation,
} from "../../components";
import { Save, SeenSubPage } from "./subPages";

// Page: Seen
export default function Seen() {
  // State: Local state
  const [isSave, setIsSave] = useState(false);
  const [isSeen, setIsSeen] = useState(true);
  const [isSeenSubPage, setIsSeenSubPage] = useState(true);

  // onClick: Functions for rendering subPages
  function renderSave() {
    setIsSave(true);
    setIsSeen(false);
    setIsSeenSubPage(false);
  }
  function renderSeen() {
    setIsSave(false);
    setIsSeen(true);
    setIsSeenSubPage(true);
  }
  function renderSeenSubPage() {
    setIsSave(false);
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
                isSeenSubPage ? <SeenSubPage /> : isSave ? <Save /> : null
              }
            />
          </ContentWrapper>
        </Wrapper>
      </Container>
    </>
  );
}
