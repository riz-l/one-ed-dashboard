// Import: Packages
import React from "react";

// Import: Elements
import { Container, StyledButton } from "./Button.elements";

// Component: Button
export default function Button({ icon, onClick, margin, text, type }) {
  return (
    <>
      <Container data-testid={"button"} margin={margin}>
        <StyledButton type={type ? type : "button"} onClick={onClick} center>
          {icon ? icon : null}
          {text ? text : "Button Text"}
        </StyledButton>
      </Container>
    </>
  );
}
