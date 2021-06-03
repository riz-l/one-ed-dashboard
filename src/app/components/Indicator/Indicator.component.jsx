// Import: Packages
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./Indicator.elements";

// Component: Indicator
export default function Indicator({ amber, green, message, red, title }) {
  return (
    <>
      <Container data-testid={"indicator"}>
        <Wrapper amber={amber} green={green} red={red}>
          <h2>{title}</h2>
          <p>{message}</p>
        </Wrapper>
      </Container>
    </>
  );
}
