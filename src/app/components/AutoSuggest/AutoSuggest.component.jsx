// Import: Packages
import React, { useState } from "react";
import Autosuggest from "react-autosuggest";

// Import: Elements
import { Container, Dropdown, Label } from "./AutoSuggest.elements";

const languages = [
  {
    name: "C",
    year: 1972,
  },
  {
    name: "C#",
    year: 2012,
  },
  {
    name: "C++",
    year: 2014,
  },
  {
    name: "HTML",
    year: 2018,
  },
  {
    name: "Javascript",
    year: 2018,
  },
  {
    name: "Java",
    year: 2018,
  },
  {
    name: "XAML",
    year: 2018,
  },
  {
    name: "C",
    year: 1972,
  },
  {
    name: "C#",
    year: 2012,
  },
  {
    name: "C++",
    year: 2014,
  },
  {
    name: "HTML",
    year: 2018,
  },
  {
    name: "Javascript",
    year: 2018,
  },
  {
    name: "Java",
    year: 2018,
  },
  {
    name: "XAML",
    year: 2018,
  },
  {
    name: "C",
    year: 1972,
  },
  {
    name: "C#",
    year: 2012,
  },
  {
    name: "C++",
    year: 2014,
  },
  {
    name: "HTML",
    year: 2018,
  },
  {
    name: "Javascript",
    year: 2018,
  },
  {
    name: "Java",
    year: 2018,
  },
  {
    name: "XAML",
    year: 2018,
  },
  {
    name: "C",
    year: 1972,
  },
  {
    name: "C#",
    year: 2012,
  },
  {
    name: "C++",
    year: 2014,
  },
  {
    name: "HTML",
    year: 2018,
  },
  {
    name: "Javascript",
    year: 2018,
  },
  {
    name: "Java",
    year: 2018,
  },
  {
    name: "XAML",
    year: 2018,
  },
  {
    name: "C",
    year: 1972,
  },
  {
    name: "C#",
    year: 2012,
  },
  {
    name: "C++",
    year: 2014,
  },
  {
    name: "HTML",
    year: 2018,
  },
  {
    name: "Javascript",
    year: 2018,
  },
  {
    name: "Java",
    year: 2018,
  },
  {
    name: "XAML",
    year: 2018,
  },
  {
    name: "C",
    year: 1972,
  },
  {
    name: "C#",
    year: 2012,
  },
  {
    name: "C++",
    year: 2014,
  },
  {
    name: "HTML",
    year: 2018,
  },
  {
    name: "Javascript",
    year: 2018,
  },
  {
    name: "Java",
    year: 2018,
  },
  {
    name: "XAML",
    year: 2018,
  },
  {
    name: "C",
    year: 1972,
  },
  {
    name: "C#",
    year: 2012,
  },
  {
    name: "C++",
    year: 2014,
  },
  {
    name: "HTML",
    year: 2018,
  },
  {
    name: "Javascript",
    year: 2018,
  },
  {
    name: "Java",
    year: 2018,
  },
  {
    name: "XAML",
    year: 2018,
  },
  {
    name: "C",
    year: 1972,
  },
  {
    name: "C#",
    year: 2012,
  },
  {
    name: "C++",
    year: 2014,
  },
  {
    name: "HTML",
    year: 2018,
  },
  {
    name: "Javascript",
    year: 2018,
  },
  {
    name: "Java",
    year: 2018,
  },
  {
    name: "XAML",
    year: 2018,
  },
];

const getSuggestions = (value) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : languages.filter(
        (lang) => lang.name.toLowerCase().slice(0, inputLength) === inputValue
      );
};

const getSuggestionValue = (suggestion) => suggestion.name;

const renderSuggestion = (suggestion) => <Dropdown>{suggestion.name}</Dropdown>;

// Component: AutoSuggest
export default function AutoSuggest({ htmlFor, labelText, left, placeholder }) {
  // State: value, suggestions
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

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
