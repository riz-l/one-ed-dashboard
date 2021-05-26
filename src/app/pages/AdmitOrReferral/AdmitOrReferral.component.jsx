// Import: Packages
import React, { useState } from "react";

// Import: Assets
// import { ReactComponent as DetailsIcon } from "../../../assets/img/icon/patient.svg";
// import { ReactComponent as NeuroObsIcon } from "../../../assets/img/icon/neuroObs.svg";

// Import: Elements
import { Container, ContentWrapper, Wrapper } from "./AdmitOrReferral.elements";

// Import: Components, SubPages
import {
  PageTitle,
  PatientDemographics,
  PrimaryNavigation,
  ReportSection,
} from "../../components";
import { DecisionToAdmit, Referral } from "./subPages";

// Page: AdmitOrReferral
export default function AdmitOrReferral() {
  // State: isDecisionToAdmit, isReferral
  const [isDecisionToAdmit, setIsDecisionToAdmit] = useState(true);
  const [isReferral, setIsReferral] = useState(false);

  // onClick: Renders DecisionToAdmit
  function renderDecisionToAdmit() {
    setIsReferral(false);
    setIsDecisionToAdmit(true);
  }

  // onClick: Renders Referral
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
