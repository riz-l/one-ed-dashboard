// Import: Packages
import React from "react";

// Import: Elements
import { Container, Label } from "./Display.elements";

// Import: Components
import { Text } from "../index";

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
    <Container data-testid={"display"}>
      {labelText && (
        <Label htmlfor={htmlFor} left={left}>
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
