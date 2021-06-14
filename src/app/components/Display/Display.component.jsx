// Import: Packages
import React from "react";

// Import: Elements
import { Container, Label } from "./Display.elements";

// Import: Components
import { Text } from "../index";

// Component: Display
export default function Display({
  fontSize,
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
        <Label
          fontSize={fontSize}
          htmlfor={htmlFor}
          labelText={labelText}
          left={left}
        >
          {labelText}
        </Label>
      )}

      <Text
        bold
        fontSize={fontSize}
        id={htmlFor}
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
