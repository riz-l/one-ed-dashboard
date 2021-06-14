// Import: Dependencies
import React from "react";

// Import: Elements
import { Container, InputField, Label } from "./Input.elements";

// Component: Input
export const Input = React.forwardRef((props, ref) => {
  return (
    <Container
      center={props.center}
      data-testid={"input"}
      left={props.left}
      margin={props.margin}
      onClick={props.onClick}
    >
      {props.labelText && (
        <Label htmlfor={props.htmlFor} left={props.left}>
          {props.labelText}
        </Label>
      )}

      <InputField
        defaultValue={props.defaultValue}
        id={props.htmlFor}
        left={props.left}
        name={props.htmlFor}
        onChange={props.onChange}
        placeholder={props.placeholder}
        ref={ref}
        type={props.type ? props.type : "text"}
        value={props.value}
        width={props.width}
      />
    </Container>
  );
});
