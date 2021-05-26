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

// Component: Checkbox
export const Checkbox = React.forwardRef((props, ref) => {
  return (
    <Container data-testid={"checkbox"}>
      <Label htmlFor={props.htmlFor}>
        <Wrapper under={props.under}>
          <InputCheckbox
            type="checkbox"
            checked={props.checked}
            onChange={props.onChange}
            name={props.htmlFor}
            id={props.htmlFor}
            ref={ref}
            value={props.value}
          />

          <VisualBox checked={props.checked}>
            <TickIcon />
          </VisualBox>

          <Text under={props.under}>{props.text}</Text>
        </Wrapper>
      </Label>
    </Container>
  );
});
