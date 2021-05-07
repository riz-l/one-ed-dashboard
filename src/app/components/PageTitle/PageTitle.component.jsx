// Import: Packages
import React from "react";

// Import: Elements
import { Container } from "./PageTitle.elements";

// Component: PageTitle
export default function PageTitle({ heading, subheading }) {
  return (
    <>
      <Container data-testid={"pageTitle"}>
        <h2>{heading}</h2>
        <span>{subheading}</span>
      </Container>
    </>
  );
}
