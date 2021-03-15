// Import: Packages
import React from "react";

// Import: Elements
import { Container } from "./PrimaryNavigation.elements";

// Component: PrimaryNavigation
export default function PrimaryNavigation({ children }) {
  return (
    <>
      <Container data-testid={"primaryNavigation"}>{children}</Container>
    </>
  );
}
