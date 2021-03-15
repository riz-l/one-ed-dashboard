// Import: Packages
import React from "react";

// Import: Assets
import { ReactComponent as TestIcon } from "../../../assets/img/icon/ward-ed.svg";

// Import: Elements
import {
  Container,
  ContentWrapper,
  Header,
  Wrapper,
} from "./Overview.elements";

// Import: Components
import {
  // PrimaryNavigation,
  ReportSection,
  SecondaryNavigation,
} from "../../components";

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
              primaryNavigation={<p>Primary Navigation</p>}
              secondaryNavigation={
                <SecondaryNavigation>
                  <SecondaryNavigation.Item>
                    <SecondaryNavigation.Icon>
                      <TestIcon />
                    </SecondaryNavigation.Icon>
                    <SecondaryNavigation.Text>Test</SecondaryNavigation.Text>
                  </SecondaryNavigation.Item>
                </SecondaryNavigation>
              }
              content={<p>Content</p>}
            />
          </ContentWrapper>
        </Wrapper>
      </Container>
    </>
  );
}
