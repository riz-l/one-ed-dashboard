// Import: Dependencies
import React from "react";

// Import: Elements
import { Container, Label, Select, Option } from "./Dropdown.elements";

// Component: Dropdown
export default function Dropdown({
  htmlFor,
  labelText,
  onChange,
  options,
  left,
  value,
  width,
}) {
  // Dropdown placeholder options
  const placeholderOptions = ["Please declare options..."];

  return (
    <Container data-testid={"dropdown"} left={left}>
      <Label htmlFor={htmlFor} left={left}>
        {labelText}
      </Label>

      <Select
        name={htmlFor}
        id={htmlFor}
        onChange={onChange}
        value={value}
        width={width}
      >
        <Option value="null">Select...</Option>
        {options
          ? options.map((option, index) => (
              <Option key={index} value={option}>
                {option}
              </Option>
            ))
          : placeholderOptions.map((placeholderOption, index) => (
              <Option key={index} value={placeholderOption}>
                {placeholderOption}
              </Option>
            ))}
        {/* {options.map((option, index) => (
          <Option key={index} value={option}>
            {option}
          </Option>
        ))} */}
      </Select>
    </Container>
  );
}
