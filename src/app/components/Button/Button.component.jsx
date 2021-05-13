// Import: Packages
import React from "react";

// Import: Elements
import { Container, StyledButton } from "./Button.elements";

// Component: Button
export default function Button({
  borderColor,
  fontSize,
  icon,
  onClick,
  margin,
  padding,
  text,
  type,
}) {
  return (
    <>
      <Container data-testid={"button"} margin={margin}>
        <StyledButton
          borderColor={borderColor}
          center
          fontSize={fontSize}
          onClick={onClick}
          padding={padding}
          type={type ? type : "button"}
        >
          {icon ? icon : null}
          {text ? text : "Button Text"}
        </StyledButton>
      </Container>
    </>
  );
}
