// Import: Packages
import React from "react";

// Import: Elements
import { Container, StyledButton } from "./Button.elements";

// Component: Button
export default function Button({ onClick, text, type }) {
  return (
    <>
      <Container data-testid={"button"}>
        <StyledButton type={type ? type : "button"} onClick={onClick}>
          {text ? text : "Button Text"}
        </StyledButton>
      </Container>
    </>
  );
}
