// Import: Packages
import React from "react";

// Import: Elements
import { Container, StyledButton } from "./Button.elements";

// Notes on Props & attributes
// onClick = Defines what happens when the button is clicked.
// text = the text within the button
// type = defaults to "button" but can also be "submit" and "reset".

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
