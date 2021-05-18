// Import: Dependencies
import React from "react";

// Import: Elements
import { Container, Label, Select, Option } from "./Dropdown.elements";

// Component: Dropdown
export const Dropdown = React.forwardRef((props, ref) => {
  // Dropdown placeholder options
  const placeholderOptions = [
    "Please declare options...",
    "option 1",
    "option2",
  ];

  return (
    <Container data-testid={"dropdown"} left={props.left}>
      <Label htmlFor={props.htmlFor} left={props.left}>
        {props.labelText}
      </Label>

      <Select
        name={props.htmlFor}
        id={props.htmlFor}
        onChange={props.onChange}
        ref={ref}
        value={props.value}
        width={props.width}
      >
        <Option value="null">Select...</Option>
        {props.options
          ? props.options.map((option, index) => (
              <Option key={index} value={option}>
                {option}
              </Option>
            ))
          : placeholderOptions.map((placeholderOption, index) => (
              <Option key={index} value={placeholderOption}>
                {placeholderOption}
              </Option>
            ))}
      </Select>
    </Container>
  );
});
