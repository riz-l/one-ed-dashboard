// Import: Packages
import React, { useState } from "react";

// Import: Elements
import { Container, ContentWrapper, Wrapper } from "./AdmitOrReferral.elements";

// Import: Components, subPages
import {
  PageTitle,
  PatientDemographics,
  PrimaryNavigation,
  ReportSection,
} from "../../components";
import { DecisionToAdmit, Referral } from "./subPages";

// Page: AdmitOrReferral
export default function AdmitOrReferral() {
  // State: Local state
  const [isDecisionToAdmit, setIsDecisionToAdmit] = useState(true);
  const [isReferral, setIsReferral] = useState(false);

  // onClick: Functions for rendering subPages
  function renderDecisionToAdmit() {
    setIsDecisionToAdmit(true);
    setIsReferral(false);
  }
  function renderReferral() {
    setIsDecisionToAdmit(false);
    setIsReferral(true);
  }

  return (
    <>
      <Container data-testid={"admitOrReferral"}>
        <Wrapper>
          <PageTitle
            heading="Decision to Admit or Referral"
            subheading="Switch between Decision to Admit or make a Referral"
          />
          <PatientDemographics />

          <ContentWrapper>
            <ReportSection
              primaryNavigation={
                <PrimaryNavigation>
                  <PrimaryNavigation.Item
                    isActive={isDecisionToAdmit ? true : false}
                    onClick={renderDecisionToAdmit}
                  >
                    <PrimaryNavigation.Text>
                      Decision To Admit
                    </PrimaryNavigation.Text>
                  </PrimaryNavigation.Item>

                  <PrimaryNavigation.Item
                    isActive={isReferral ? true : false}
                    onClick={renderReferral}
                  >
                    <PrimaryNavigation.Text>Referral</PrimaryNavigation.Text>
                  </PrimaryNavigation.Item>
                </PrimaryNavigation>
              }
              content={
                isDecisionToAdmit ? (
                  <DecisionToAdmit />
                ) : isReferral ? (
                  <Referral />
                ) : null
              }
            />
          </ContentWrapper>
        </Wrapper>
      </Container>
    </>
  );
}
