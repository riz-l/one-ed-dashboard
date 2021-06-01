// Import: Dependencies
import React from "react";

// Import: Utils
import { capitalizeFirstLetter } from "../../../utils/capitalizeFirstLetter";

// Import: Elements
import { Container, Label, Option, Select } from "./Dropdown.elements";

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
        defaultValue={props.defaultValue}
        id={props.htmlFor}
        name={props.htmlFor}
        onChange={props.onChange}
        ref={ref}
        value={props.value}
        width={props.width}
      >
        <Option value="null">Select...</Option>
        {props.options
          ? props.options.map((option, index) => (
              <Option key={index} value={option}>
                {capitalizeFirstLetter(option)}
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
