// Import: Packages
import React from "react";

// Import: Elements
import { Container } from "./PageTitle.elements";

// Component: PageTitle
export default function PageTitle({
  backgroundColor,
  heading,
  padding,
  subheading,
}) {
  return (
    <>
      <Container
        backgroundColor={backgroundColor}
        data-testid={"pageTitle"}
        padding={padding}
      >
        <h2>{heading}</h2>
        <span>{subheading}</span>
      </Container>
    </>
  );
}
