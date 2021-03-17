// Import: Packages
import React from "react";

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
import { Details } from "./subPages";

// Component: Overview
export default function Overview() {
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
                  <PrimaryNavigation.Item>
                    <PrimaryNavigation.Text>Details</PrimaryNavigation.Text>
                  </PrimaryNavigation.Item>

                  <PrimaryNavigation.Item>
                    <PrimaryNavigation.Text>History</PrimaryNavigation.Text>
                  </PrimaryNavigation.Item>
                </PrimaryNavigation>
              }
              secondaryNavigation={
                <SecondaryNavigation>
                  <SecondaryNavigation.Item>
                    <SecondaryNavigation.Icon>
                      <DetailsIcon />
                    </SecondaryNavigation.Icon>
                    <SecondaryNavigation.Text>Details</SecondaryNavigation.Text>
                  </SecondaryNavigation.Item>
                </SecondaryNavigation>
              }
              content={
                <>
                  <Details />
                </>
              }
            />
          </ContentWrapper>
        </Wrapper>
      </Container>
    </>
  );
}
