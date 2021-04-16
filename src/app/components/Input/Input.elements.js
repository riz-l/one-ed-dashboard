// Import: Dependencies
import styled, { css } from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  align-items: ${({ center }) => (center === true ? "center" : "flex-start")};
  display: flex;
  justify-content: center;
  ${({ left }) =>
    left
      ? css`
          align-items: center;
          flex-direction: row;
        `
      : css`
          flex-direction: column;
        `}
  margin-bottom: 1rem;
  margin: ${({ margin }) => margin && margin};
`;

// Element: Label
export const Label = styled.label`
  color: #6b7a99;
  ${({ left }) =>
    left
      ? css`
          margin-right: 1rem;
        `
      : css`
          margin-bottom: 8px;
        `}
`;

// Element: InputField
export const InputField = styled.input`
  appearance: none;
  -webkit-appearance: none;
  border: 2px solid #edeff2;
  border-radius: 8px;
  color: #4d5e80;
  padding: 0.4rem 1rem;
  transition: all 100ms linear;
  -webkit-user-select: auto;
  -khtml-user-select: auto;
  -moz-user-select: auto;
  -ms-user-select: auto;
  user-select: auto;
  width: ${({ width }) => (width ? width : "auto")};

  ::-webkit-input-placeholder {
    font-family: "Poppins", sans-serif;
  }

  ::-moz-placeholder {
    font-family: "Poppins", sans-serif;
  }

  :-ms-input-placeholder {
    font-family: "Poppins", sans-serif;
  }

  :-moz-placeholder {
    font-family: "Poppins", sans-serif;
  }

  /* Input type="password" */
  &[type="password"] {
    color: #4d5e80;
  }

  /* Input type="submit" */
  &[type="submit"] {
    appearance: none;
    -webkit-appearance: none;
    background-color: #f7f8fa;
    border: 1px solid #edeff2;
    border-radius: 8px;
    color: #6b7a99;
    cursor: pointer;
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    padding: 0.4rem 1rem;
    transition: all 100ms linear;

    &:hover {
      background-color: #eef0f4;
      box-shadow: none !important;
      color: #4d5e80;
      transition: all 100ms linear;
    }

    &:focus {
      border: 1px solid #edeff2;
      box-shadow: none !important;
      outline: none !important;
    }
  }

  /* Input type="number" */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    appearance: textfield;
    -moz-appearance: textfield;
    background-color: #ffffff;
    color: #4d5e80;
    cursor: pointer;
    font-family: "Poppins", sans-serif;
  }

  /* Input type="date" */
  &[type="date"]::-webkit-clear-button {
    display: none;
  }

  &[type="date"]::-webkit-inner-spin-button {
    display: none;
  }

  &[type="date"]::-webkit-calendar-picker-indicator {
    color: #4d5e80;
    cursor: pointer;
    opacity: 0.6;
    filter: invert(0.5);
    transition: all 100ms linear;

    &:hover {
      opacity: 0.9;
      transition: all 100ms linear;
    }
  }

  &[type="date"] {
    appearance: none;
    -webkit-appearance: none;
    background-color: #ffffff;
    color: #4d5e80;
    cursor: pointer;
    font-family: "Poppins", sans-serif;
  }

  /* Input type="time" */
  &[type="time"] {
    appearance: none;
    -webkit-appearance: none;
    background-color: #ffffff;
    color: #4d5e80;
    cursor: pointer;
    font-family: "Poppins", sans-serif;
  }

  &[type="time"]::-webkit-calendar-picker-indicator {
    color: #4d5e80;
    cursor: pointer;
    opacity: 0.6;
    filter: invert(0.5);
    transition: all 100ms linear;

    &:hover {
      opacity: 0.9;
      transition: all 100ms linear;
    }
  }

  @media screen and (max-width: 848px) {
    width: 180px;
    max-width: 180px;
  }

  &:hover {
    box-shadow: 0 0 5px #7cf0f4;
    transition: all 100ms linear;
  }

  &:focus {
    border: 2px solid #dcdfe5;
    box-shadow: 0 0 5px #a1f4f7;
    outline: none !important;
    transition: all 100ms linear;
  }
`;
