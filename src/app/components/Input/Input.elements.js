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
  color: ${(props) => props.theme.colors.global.textSecondary};
  transition: all 100ms linear;
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
  background-color: ${(props) => props.theme.colors.global.backgroundPrimary};
  border: 2px solid ${(props) => props.theme.colors.global.borderPrimary};
  border-radius: 8px;
  color: ${(props) => props.theme.colors.global.textPrimary};
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
    color: ${(props) => props.theme.colors.global.textPrimary};
    transition: all 100ms linear;
  }

  /* Input type="submit" */
  &[type="submit"] {
    -webkit-appearance: none;
    appearance: none;
    background-color: ${(props) =>
      props.theme.colors.global.backgroundSecondary};
    border: 1px solid ${(props) => props.theme.colors.global.borderPrimary};
    border-radius: 8px;
    color: ${(props) => props.theme.colors.global.textSecondary};
    cursor: pointer;
    font-family: "PoppinsRegular", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    padding: 0.4rem 1rem;
    transition: all 100ms linear;

    &:hover {
      background-color: ${(props) => props.theme.colors.global.borderPrimary};
      box-shadow: none !important;
      color: ${(props) => props.theme.colors.global.textPrimary};
      transition: all 100ms linear;
    }

    &:focus {
      border: 1px solid ${(props) => props.theme.colors.global.borderPrimary};
      box-shadow: none !important;
      outline: none !important;
      transition: all 100ms linear;
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
    background-color: ${(props) => props.theme.colors.global.backgroundPrimary};
    color: ${(props) => props.theme.colors.global.textPrimary};
    cursor: pointer;
    font-family: "PoppinsRegular", sans-serif;
    font-weight: 400;
    transition: all 100ms linear;
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
    color: ${(props) => props.theme.colors.global.textPrimary};
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
    background-color: ${(props) => props.theme.colors.global.backgroundPrimary};
    color: ${(props) => props.theme.colors.global.textPrimary};
    cursor: pointer;
    font-family: "PoppinsRegular", sans-serif;
    font-weight: 400;
    transition: all 100ms linear;
    width: ${({ width }) => (width ? width : "auto")};
  }

  /* Input type="time" */
  &[type="time"] {
    -webkit-appearance: none;
    appearance: none;
    background-color: ${(props) => props.theme.colors.global.backgroundPrimary};
    color: ${(props) => props.theme.colors.global.textPrimary};
    cursor: pointer;
    font-family: "PoppinsRegular", sans-serif;
    font-weight: 400;
    transition: all 100ms linear;
    width: ${({ width }) => (width ? width : "auto")};
  }

  &[type="time"]::-webkit-calendar-picker-indicator {
    color: ${(props) => props.theme.colors.global.textPrimary};
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
    box-shadow: 0 0 5px
      ${(props) => props.theme.colors.formComponents.inputBoxHover};
    transition: all 100ms linear;
  }

  &:focus {
    border: 2px solid ${(props) => props.theme.colors.global.borderSecondary};
    box-shadow: 0 0 5px
      ${(props) => props.theme.colors.formComponents.inputBoxFocus};
    outline: none !important;
    transition: all 100ms linear;
  }
`;
