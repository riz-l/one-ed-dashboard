// Import: Dependencies
import React from "react";

// Import:Elements
import { StyledText } from "./Anchor.elements";

// Component: Anchor
export default function Anchor({ href, heading, subheading, text, ...props }) {
  return (
    <>
      <StyledText
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
