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
  type,
  value,
  width,
}) {
  return (
    <Container left={left}>
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
        type={type}
        value={value}
        width={width}
      />
    </Container>
  );
}
