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
  Wrapper,
} from "./Checkbox.elements";

// Component: Checkbox
export const Checkbox = React.forwardRef((props, ref) => {
  return (
    <Container data-testid={"checkbox"}>
      <Label htmlFor={props.htmlFor}>
        <Wrapper under={props.under}>
          <InputCheckbox
            checked={props.checked}
            id={props.htmlFor}
            name={props.htmlFor}
            onChange={props.onChange}
            ref={ref}
            type="checkbox"
            value={props.value}
          />

          <VisualBox checked={props.checked}>
            {props.checked ? <TickIcon /> : null}
          </VisualBox>

          <Text under={props.under}>{props.text}</Text>
        </Wrapper>
      </Label>
    </Container>
  );
});
