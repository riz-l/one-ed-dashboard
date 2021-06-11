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
  margin-bottom: ${({ labelText }) => (labelText ? "1rem" : "0")};
  margin: ${({ margin }) =>
    margin &&
    margin}; /* At the bottom on purpose to override previous stylings if margin is passed as a prop */
`;

// Element: Label
export const Label = styled.label`
  color: #6b7a99;
  ${({ labelText, left }) =>
    labelText && left
      ? css`
          margin-right: 0.4rem;
        `
      : !labelText && left
      ? css`
          margin-bottom: 0;
          margin-right: 1rem;
        `
      : css`
          margin-bottom: 2px;
        `}
  font-size: ${({ fontSize }) => fontSize && fontSize};
  text-transform: capitalize;
`;
