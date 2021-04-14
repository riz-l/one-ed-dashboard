// Import: Packages
import styled, { css } from "styled-components/macro";

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

  & .react-autosuggest__container {
    position: relative;
  }

  & .react-autosuggest__input {
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
  }

  .react-autosuggest__input--focused {
    outline: none;
  }

  & .react-autosuggest__suggestions-container {
    display: none;
  }

  & .react-autosuggest__suggestions-container--open {
    background-color: #ffffff;
    border: 1px solid #dcdfe5;
    border-radius: 8px;
    color: #6b7a99;
    display: block;
    font-family: "Poppins", sans-serif;
    font-size: 0.8rem;
    font-weight: 400;
    max-height: 100px;
    overflow-y: auto;
    position: absolute;
    top: 3rem;
    width: 280px;
    z-index: 2;
  }

  & .react-autosuggest__suggestions-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  & .react-autosuggest__suggestion {
    cursor: pointer;
    padding: 0.4rem 1rem;
    transition: all 100ms linear;

    &:hover {
      background-color: #edeff2;
      color: #4d5e80;
      transition: all 100ms linear;
    }
  }

  & .react-autosuggest__suggestion--highlighted {
    background-color: #ddd;
  }
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

// Element: Dropdown
export const Dropdown = styled.div``;
