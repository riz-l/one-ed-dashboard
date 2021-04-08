// Import: Packages
import React from "react";

// Import: Elements
import { Container, StyledButton } from "./Button.elements";

// Component: Button
export default function Button({ onClick, text }) {
  return (
    <>
      <Container data-testid={"button"}>
        <StyledButton type="button" onClick={onClick}>
          {text}
        </StyledButton>
      </Container>
    </>
  );
}
