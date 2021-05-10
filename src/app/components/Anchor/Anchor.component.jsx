// Import: Dependencies
import React from "react";

// Import: Elements
import { StyledText } from "./Anchor.elements";

// Notes on Props & attributes
// href= the destination website address
// heading = styles the link as a heading
// subheading = styles the link as a subheading
// text = styles the link as text (the default)
// ...props = allows the component to accept props that have not been deconstructed e.g. props.enterpropnamehere. This could be used to set up specific styling and behaviours.
// target = hard coded to _blank which opens the link in a new browser tab.
// props.children = Allows for the component to contain other components which will be useful if the link was to be an image.

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
