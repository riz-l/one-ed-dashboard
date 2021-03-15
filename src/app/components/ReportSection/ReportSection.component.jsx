// Import: Packages
import React from "react";

// Import: Elements
import {
  Container,
  Content,
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
      <Container data-testid={"reportSection"}>
        <PrimaryNavigation>{primaryNavigation}</PrimaryNavigation>
        <SecondaryNavigation>{secondaryNavigation}</SecondaryNavigation>
        <Content>{content}</Content>
      </Container>
    </>
  );
}
