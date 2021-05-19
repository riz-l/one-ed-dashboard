// Import: Packages
import React from "react";

// Import: Elements
import { Container, Label, StyledTextArea } from "./TextArea.elements";

// Component: TextArea
export default function TextArea({
  cols,
  htmlFor,
  labelText,
  onChange,
  placeholder,
  rows,
  value,
}) {
  return (
    <>
      <Container data-testid={"textArea"}>
        {labelText && <Label htmlFor={htmlFor}>{labelText}</Label>}

        <StyledTextArea
          id={htmlFor}
          name={htmlFor}
          onChange={onChange}
          value={value}
          rows={rows ? rows : "12"}
          cols={cols && cols}
          placeholder={placeholder}
        ></StyledTextArea>
      </Container>
    </>
  );
}
