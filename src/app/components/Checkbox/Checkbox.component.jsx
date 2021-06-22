// Import: Dependencies
import React from "react";

// Import: Assets
import { ReactComponent as TickIcon } from "../../../assets/img/icon/tick.svg";

// Import: Elements
import {
  Container,
  InputCheckbox,
  Label,
  Text,
  VisualBox,
} from "./Checkbox.elements";

// Component: Checkbox
export const Checkbox = React.forwardRef((props, ref) => {
  return (
    <>
      <Container data-testid={"checkbox"} margin={props.margin}>
        <Label htmlFor={props.htmlFor} left={props.left}>
          {/* <Text under={props.under}>{props.text}</Text> */}
          <Text left={props.left}>{props.text} </Text>

          <VisualBox checked={props.checked} left={props.left}>
            {props.checked ? <TickIcon /> : null}

            <InputCheckbox
              checked={props.checked}
              id={props.htmlFor}
              name={props.htmlFor}
              onChange={props.onChange}
              ref={ref}
              type="checkbox"
              value={props.value}
            />
          </VisualBox>
        </Label>
      </Container>
    </>
  );
});
