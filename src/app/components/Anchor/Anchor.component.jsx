// Import: Packages
import React from "react";

// Import: Elements
import { StyledText } from "./Anchor.elements";

// Component: Anchor
export default function Anchor({
  color,
  colorOnHover,
  fontSize,
  heading,
  href,
  subheading,
  text,
  ...props
}) {
  return (
    <>
      <StyledText
        {...props}
        color={color}
        colorOnHover={colorOnHover}
        data-testid={"anchor"}
        fontSize={fontSize}
        heading={heading}
        href={href}
        subheading={subheading}
        target="_blank"
        text={text}
      >
        {props.children}
      </StyledText>
    </>
  );
}
