// Import: Packages
import React, { useEffect, useState } from "react";
import Autosuggest from "react-autosuggest";
import { useDispatch } from "react-redux";

// Import: Elements
import { Container, Dropdown, Label } from "./AutoSuggest.elements";

// Component: AutoSuggest
export const AutoSuggest = React.forwardRef((props, ref) => {
  const dispatch = useDispatch();

  // State: value, suggestions
  const [value, setValue] = useState("");
  console.log("value: ", value);
  const [suggestions, setSuggestions] = useState([]);
  console.log("suggestions: ", suggestions);

  // AutoSuggest placeholder options
  const placeholderOptions = [
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
      : props.options
      ? props.options.filter(
          (option) =>
            option.name.toLowerCase().slice(0, inputLength) === inputValue
        )
      : placeholderOptions.filter(
          (placeholderOption) =>
            placeholderOption.name.toLowerCase().slice(0, inputLength) ===
            inputValue
        );
  };

  const getSuggestionValue = (suggestion) => suggestion.name;

  const renderSuggestion = (suggestion) => (
    <Dropdown ref={ref}>
      <span onClick={() => dispatch(props.onChange(suggestion.name))}>
        {suggestion.name}
      </span>
    </Dropdown>
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
    placeholder: props.placeholder ? props.placeholder : "Start typing...",
    value,
    onChange: onChange,
  };

  // Effect: if value === "", set Redux state to === ""
  useEffect(() => {
    if (value === "") {
      dispatch(props.onChange(""));
    }
  }, [value, dispatch, props]);

  return (
    <>
      <Container left={props.left} data-testid={"autoSuggest"}>
        {props.labelText && (
          <Label htmlfor={props.htmlFor} left={props.left}>
            {props.labelText}
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
});
