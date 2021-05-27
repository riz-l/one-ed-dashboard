// Import: Dependencies
import React from "react";

// Import: Elements
import { StyledText } from "./Text.elements";

// Component: Text
export default function Text({
  bold,
  fontSize,
  heading,
  subheading,
  text,
  ...props
}) {
  return (
    <>
      <StyledText
        as={props.as}
        bold={bold}
        fontSize={fontSize}
        heading={heading}
        subheading={subheading}
        text={text}
        {...props}
        data-testid={"text"}
      >
        {props.children}
      </StyledText>
    </>
  );
}
