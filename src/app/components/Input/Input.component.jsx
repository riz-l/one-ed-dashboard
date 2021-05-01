// Import: Dependencies
import React from "react";

// Import: Elements
import { Container, InputField, Label } from "./Input.elements";

// Component: Input
export const Input = React.forwardRef((props, ref) => {
  return (
    <Container
      onClick={props.onClick}
      center={props.center}
      left={props.left}
      margin={props.margin}
      data-testid={"input"}
    >
      {props.labelText && (
        <Label htmlfor={props.htmlFor} left={props.left}>
          {props.labelText}
        </Label>
      )}

      <InputField
        id={props.htmlFor}
        left={props.left}
        name={props.htmlFor}
        onChange={props.onChange}
        type={props.type ? props.type : "text"}
        placeholder={props.placeholder}
        ref={ref}
        value={props.value}
        width={props.width}
      />
    </Container>
  );
});
