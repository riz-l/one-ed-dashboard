// Import: Packages
import React from "react";

// Import: Elements
import {
  Container,
  Content,
  ContentContainer,
  ContentWrapper,
  PrimaryNavigation,
  SecondaryNavigation,
} from "./ReportSection.elements";

// Component: ReportSection
export default function ReportSection({
  primaryNavigation,
  secondaryNavigation,
  content,
}) {
  return (
    <>
      <Container
        data-testid={"reportSection"}
        primaryNavigation={primaryNavigation}
        secondaryNavigation={secondaryNavigation}
      >
        <PrimaryNavigation>
          {primaryNavigation ? primaryNavigation : null}
        </PrimaryNavigation>
        <SecondaryNavigation>
          {secondaryNavigation ? secondaryNavigation : null}
        </SecondaryNavigation>
        <Content>
          <ContentContainer>
            <ContentWrapper secondaryNavigation={secondaryNavigation}>
              {content}
            </ContentWrapper>
          </ContentContainer>
        </Content>
      </Container>
    </>
  );
}
