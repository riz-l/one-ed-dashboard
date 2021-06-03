// Import: Packages
import React from "react";

// Import: Elements
import { Container, Label, StyledTextArea } from "./TextArea.elements";

// Component: TextArea
export const TextArea = React.forwardRef((props, ref) => {
  return (
    <>
      <Container data-testid={"textArea"}>
        {props.labelText && (
          <Label htmlFor={props.htmlFor}>{props.labelText}</Label>
        )}

        <StyledTextArea
          cols={props.cols && props.cols}
          id={props.htmlFor}
          name={props.htmlFor}
          onChange={props.onChange}
          placeholder={props.placeholder}
          ref={ref}
          rows={props.rows ? props.rows : "12"}
          value={props.value}
        />
      </Container>
    </>
  );
});
