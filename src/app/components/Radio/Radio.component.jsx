// Import: Dependencies
import React from "react";

// Import: Assets
import { ReactComponent as TickIcon } from "../../../assets/img/icon/tick.svg";

// Import: Elements
import { Container, Input, Label, Text, VisualBox } from "./Radio.elements";

// Component: Radio
export const Radio = React.forwardRef((props, ref) => {
  return (
    <>
      <Container data-testid={"radio"}>
        <Label htmlFor={props.value}>
          <Text>{props.text}</Text>

          <VisualBox checked={props.checked} onChange={props.onChange}>
            <TickIcon />

            <Input
              type="radio"
              value={props.value}
              name={props.name}
              checked={props.checked}
              onChange={props.onChange}
              ref={ref}
            />
          </VisualBox>
        </Label>
      </Container>
    </>
  );
});
