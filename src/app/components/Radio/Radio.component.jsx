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
      <Container data-testid={"radio"} margin={props.margin}>
        <Label htmlFor={props.value}>
          <Text>{props.text}</Text>

          <VisualBox checked={props.checked} onChange={props.onChange}>
            {props.checked ? <TickIcon /> : null}

            <Input
              checked={props.checked}
              name={props.name}
              onChange={props.onChange}
              ref={ref}
              type="radio"
              value={props.value}
            />
          </VisualBox>
        </Label>
      </Container>
    </>
  );
});
