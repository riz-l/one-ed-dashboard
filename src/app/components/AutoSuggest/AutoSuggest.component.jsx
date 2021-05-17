// Import: Packages
import React, { useState } from "react";
import Autosuggest from "react-autosuggest";

// Import: Elements
import { Container, Dropdown, Label } from "./AutoSuggest.elements";

// Component: AutoSuggest
export default function AutoSuggest({
  htmlFor,
  labelText,
  left,
  options,
  placeholder,
}) {
  // State: value, suggestions
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // AutoSuggest placeholder options
  const languages = [
    {
      name: "C",
    },
    {
      name: "C#",
    },
  ];

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : options
      ? options.filter(
          (option) =>
            option.name.toLowerCase().slice(0, inputLength) === inputValue
        )
      : languages.filter(
          (lang) => lang.name.toLowerCase().slice(0, inputLength) === inputValue
        );
  };

  const getSuggestionValue = (suggestion) => suggestion.name;

  const renderSuggestion = (suggestion) => (
    <Dropdown>{suggestion.name}</Dropdown>
  );

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const inputProps = {
    placeholder: placeholder ? placeholder : "Start typing...",
    value,
    onChange: onChange,
  };

  return (
    <>
      <Container left={left} data-testid={"autoSuggest"}>
        {labelText && (
          <Label htmlfor={htmlFor} left={left}>
            {labelText}
          </Label>
        )}

        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
      </Container>
    </>
  );
}
