// Import: Dependencies
import styled, { css } from "styled-components/macro";

// Import: Definitions
import { deviceMaxWidth } from "../../../definitions/breakPoints";

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
  margin: ${({ margin }) =>
    margin &&
    margin}; /* At the bottom on purpose to override previous stylings if margin is passed as a prop */
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
  -webkit-appearance: none;
  appearance: none;
  border: 2px solid #edeff2;
  border-radius: 8px;
  color: #4d5e80;
  height: 2rem;
  padding: 0.4rem 1rem;
  transition: all 100ms linear;
  -webkit-user-select: auto;
  -khtml-user-select: auto;
  -moz-user-select: auto;
  -ms-user-select: auto;
  user-select: auto;
  width: ${({ width }) => (width ? width : "300px")};

  @media ${deviceMaxWidth.tabletL} {
    width: ${({ width }) => (width ? width : "150px")};
  }

  ::-webkit-input-placeholder {
    font-family: "PoppinsRegular", sans-serif;
    font-weight: 400;
  }

  ::-moz-placeholder {
    font-family: "PoppinsRegular", sans-serif;
    font-weight: 400;
  }

  :-ms-input-placeholder {
    font-family: "PoppinsRegular", sans-serif;
    font-weight: 400;
  }

  :-moz-placeholder {
    font-family: "PoppinsRegular", sans-serif;
    font-weight: 400;
  }

  /* Input type="password" */
  &[type="password"] {
    color: #4d5e80;
  }

  /* Input type="submit" */
  &[type="submit"] {
    -webkit-appearance: none;
    appearance: none;
    background-color: #f7f8fa;
    border: 1px solid #edeff2;
    border-radius: 8px;
    color: #6b7a99;
    cursor: pointer;
    font-family: "PoppinsRegular", sans-serif;
    font-size: 1rem;
    font-weight: 400;
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
    appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
    -webkit-appearance: textfield;
    appearance: textfield;
    background-color: #ffffff;
    color: #4d5e80;
    cursor: pointer;
    font-family: "PoppinsRegular", sans-serif;
    font-weight: 400;
    width: ${({ width }) => (width ? width : "150px")};
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
    filter: invert(0.5);
    opacity: 0.6;
    transition: all 100ms linear;

    &:hover {
      opacity: 0.9;
      transition: all 100ms linear;
    }
  }

  &[type="date"] {
    -webkit-appearance: none;
    appearance: none;
    background-color: #ffffff;
    color: #4d5e80;
    cursor: pointer;
    font-family: "PoppinsRegular", sans-serif;
    font-weight: 400;
    width: ${({ width }) => (width ? width : "auto")};
  }

  /* Input type="time" */
  &[type="time"] {
    -webkit-appearance: none;
    appearance: none;
    background-color: #ffffff;
    color: #4d5e80;
    cursor: pointer;
    font-family: "PoppinsRegular", sans-serif;
    font-weight: 400;
    width: ${({ width }) => (width ? width : "auto")};
  }

  &[type="time"]::-webkit-calendar-picker-indicator {
    color: #4d5e80;
    cursor: pointer;
    filter: invert(0.5);
    opacity: 0.6;
    transition: all 100ms linear;

    &:hover {
      opacity: 0.9;
      transition: all 100ms linear;
    }
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
