// Import: Packages
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./Indicator.elements";

// Component: Indicator
// Guidance: The Indicator component is a box that changes colour and displays a message depending on the outcome of a
// ... calculation. Accepts props which determine the background color
export default function Indicator({ red, amber, green, title, message }) {
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
