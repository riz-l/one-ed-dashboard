// Import: Dependencies
import React from "react";

// Import: Elements
import { Container, InputField, Label } from "./Input.elements";

// Component: Input
export default function Input({
  center,
  htmlFor,
  labelText,
  left,
  onChange,
  onClick,
  margin,
  placeholder,
  type,
  value,
  width,
}) {
  return (
    <Container
      onClick={onClick}
      center={center}
      left={left}
      margin={margin}
      data-testid={"input"}
    >
      {labelText && (
        <Label htmlFor={htmlFor} left={left}>
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
