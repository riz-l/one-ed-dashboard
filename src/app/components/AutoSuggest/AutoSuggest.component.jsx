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
  const [suggestions, setSuggestions] = useState([]);

  // AutoSuggest placeholder options
  const placeholderOptions = [
    {
      name: "C",
      code: "000001",
    },
    {
      name: "C#",
      code: "000002",
    },
  ];

  // Filters options || placeholderOptions by current value && value.length
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

  // Gets individual suggestion by suggestion.name
  const getSuggestionValue = (suggestion) => suggestion.name;

  // Renders each suggestion
  const renderSuggestion = (suggestion) => (
    <Dropdown ref={ref}>
      <span
        onClick={() => {
          dispatch(props.onChange(suggestion.name));
          dispatch(props.codeOnChange(suggestion.code));
        }}
      >
        {suggestion.name}
      </span>
    </Dropdown>
  );

  // Autosuggest props
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
    if (value === "" && props.onChange && props.onChange.length > 0) {
      dispatch(props.onChange(""));
      setValue("");
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
