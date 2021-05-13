// Import: Packages
import React from "react";

// Import: Elements
import { Container, Label } from "./Display.elements";

// Import: Components
import { Text } from "../index";

// heading = if this prop is given (or set to true) the <Text> component will be displayed as a heading. The label text remains the same.
// htmlFor =
// labelText = The text appearing to the user above the displayed value
//left
// subheading = if this prop is given (or set to true) the <Text> component will be displayed as a subheading. The label text remains the same.
// text = The
// ...props = allows the component to accept props that have not been deconstructed e.g. props.enterpropnamehere. This could be used to set up specific styling and behaviours.

// Component: Display
export default function Display({
  heading,
  htmlFor,
  labelText,
  left,
  subheading,
  text,
  ...props
}) {
  return (
    <Container
      data-testid={"display"}
      labelText={labelText}
      left={left}
      margin={props.margin}
    >
      {labelText && (
        <Label htmlfor={htmlFor} labelText={labelText} left={left}>
          {labelText}
        </Label>
      )}

      <Text
        id={htmlFor}
        bold
        heading={heading}
        subheading={subheading}
        text={text}
        {...props}
      >
        {props.children}
      </Text>
    </Container>
  );
}
