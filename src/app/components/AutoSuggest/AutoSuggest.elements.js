// Import: Packages
import styled, { css } from "styled-components/macro";

// Import: Definitions
import { deviceMaxWidth } from "../../../definitions/breakPoints";

// Element: Container
export const Container = styled.div`
  align-items: flex-start;
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

  & input {
    font-family: "PoppinsRegular", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    background-color: ${(props) => props.theme.colors.global.backgroundPrimary};
  }

  & .react-autosuggest__container {
    position: relative;
  }

  & .react-autosuggest__input {
    appearance: none;
    -webkit-appearance: none;
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

    @media ${deviceMaxWidth.tabletL} {
      width: 150px;
    }

    &:hover {
      box-shadow: 0 0 5px
        ${(props) => props.theme.colors.formComponents.inputBoxHover};
      transition: all 100ms linear;
    }

    &:focus {
      border: 2px solid
        ${(props) => props.theme.colors.formComponents.inputBoxBorderFocus};
      box-shadow: 0 0 5px #${(props) => props.theme.colors.formComponents.inputBoxFocus};
      outline: none !important;
      transition: all 100ms linear;
    }
  }

  .react-autosuggest__input--focused {
    outline: none;
  }

  & .react-autosuggest__suggestions-container {
    display: none;
  }

  & .react-autosuggest__suggestions-container--open {
    background-color: ${(props) => props.theme.colors.global.backgroundPrimary};
    border: 1px solid ${(props) => props.theme.colors.global.borderSecondary};
    border-radius: 8px;
    color: ${(props) => props.theme.colors.global.textSecondary};
    display: block;
    font-family: "PoppinsRegular", sans-serif;
    font-size: 0.8rem;
    font-weight: 400;
    max-height: 100px;
    overflow-y: auto;
    position: absolute;
    top: 3rem;
    transition: all 100ms linear;
    width: 250px;
    z-index: 2;
  }

  & .react-autosuggest__suggestions-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  & .react-autosuggest__suggestion {
    transition: all 100ms linear;

    &:hover {
      background-color: ${(props) => props.theme.colors.global.borderPrimary};
      color: ${(props) => props.theme.colors.global.textPrimary};
      transition: all 100ms linear;
    }
  }

  & .react-autosuggest__suggestion--highlighted {
    background-color: ${(props) => props.theme.colors.global.borderPrimary};
    transition: all 100ms linear;
  }
`;

// Element: Label
export const Label = styled.label`
  color: ${(props) => props.theme.colors.global.textSecondary};
  ${({ left }) =>
    left
      ? css`
          margin-right: 1rem;
        `
      : css`
          margin-bottom: 8px;
        `}
  transition: all 100ms linear;
`;

// Element: Dropdown
export const Dropdown = styled.div`
  width: auto;

  & span {
    align-items: center;
    cursor: pointer;
    display: flex;
    font-size: 1rem;
    justify-content: flex-start;
    padding: 0.4rem 1rem;
    width: auto;
  }
`;
