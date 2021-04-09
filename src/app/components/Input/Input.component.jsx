// Import: Dependencies
import React from "react";

// Import: Elements
import { Container, InputField, Label } from "./Input.elements";

// Component: Input
export default function Input({
  htmlFor,
  labelText,
  left,
  onChange,
  placeholder,
  type,
  value,
  width,
}) {
  return (
    <Container left={left} data-testid={"input"}>
      {labelText && (
        <Label htmlfor={htmlFor} left={left}>
          {labelText}
        </Label>
      )}

      <InputField
        id={htmlFor}
        left={left}
        name={htmlFor}
        onChange={onChange}
        type={type ? type : "text"}
        placeholder={placeholder}
        value={value}
        width={width}
      />
    </Container>
  );
}
