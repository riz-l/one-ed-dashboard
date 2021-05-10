// Import: Dependencies
import React from "react";

// Import: Assets
import { ReactComponent as TickIcon } from "../../../assets/img/icon/tick.svg";

// Import: Elements
import { Container, Input, Label, Text, VisualBox } from "./Radio.elements";

// Notes on the props
// checked is used to make the box start off as ticked
// name links together all the related radio buttons
// onChange
// text is the text displayed to the user next to the box
// value is the value that gets submitted to the database if the onChange event is triggered.
// htmlFor is what will

// Component: Radio
export default function Radio({ checked, name, onChange, text, value }) {
  return (
    <>
      <Container data-testid={"radio"}>
        <Label htmlFor={value}>
          <Text>{text}</Text>

          <VisualBox checked={checked} onChange={onChange}>
            <TickIcon />

            <Input
              type="radio"
              value={value}
              name={name}
              checked={checked}
              onChange={onChange}
            />
          </VisualBox>
        </Label>
      </Container>
    </>
  );
}
