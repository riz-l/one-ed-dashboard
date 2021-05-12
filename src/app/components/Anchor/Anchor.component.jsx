// Import: Dependencies
import React from "react";

// Import: Elements
import { StyledText } from "./Anchor.elements";

// Component: Anchor
export default function Anchor({
  color,
  colorOnHover,
  fontSize,
  href,
  heading,
  subheading,
  text,
  ...props
}) {
  return (
    <>
      <StyledText
        color={color}
        colorOnHover={colorOnHover}
        fontSize={fontSize}
        href={href}
        target="_blank"
        heading={heading}
        subheading={subheading}
        text={text}
        {...props}
        data-testid={"anchor"}
      >
        {props.children}
      </StyledText>
    </>
  );
}
