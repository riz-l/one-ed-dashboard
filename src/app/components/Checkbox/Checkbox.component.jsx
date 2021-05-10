// Import: Dependencies
import React from "react";

// Import: Assets
import { ReactComponent as TickIcon } from "../../../assets/img/icon/tick.svg";

// Import: Elements
import {
  Container,
  Wrapper,
  Label,
  InputCheckbox,
  Text,
  VisualBox,
} from "./Checkbox.elements";

// Notes on Props & attributes
// checked = if this prop is given (or set to false) then the  checkbox starts off as ticked.
// onChange = defines what happens when the checkbox is checked or unchecked.
// under = if present or set to true this sets the flex-direction to column which puts the label above the checkbox rather than to the side.

// Component: Checkbox
export default function Checkbox({
  checked,
  onChange,
  under,
  text,
  htmlFor,
  value,
}) {
  return (
    <Container data-testid={"checkbox"}>
      <Label htmlFor={htmlFor}>
        <Wrapper under={under}>
          <InputCheckbox
            type="checkbox"
            checked={checked}
            onChange={onChange}
            name={htmlFor}
            id={htmlFor}
            value={value}
          />

          <VisualBox checked={checked}>
            <TickIcon />
          </VisualBox>

          <Text under={under}>{text}</Text>
        </Wrapper>
      </Label>
    </Container>
  );
}
