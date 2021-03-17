// Import: Dependencies
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
`;

// Element: Label
export const Label = styled.label`
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
  border: 2px solid #dfdfe2;
  padding: 0.4rem 1rem;
  transition: all 100ms linear;
  width: ${({ width }) => width ?? width};

  @media screen and (max-width: 848px) {
    width: 180px;
    max-width: 180px;
  }

  &:hover {
    box-shadow: 0 0 5px #7cf0f4;
    transition: all 100ms linear;
  }

  &:focus {
    border: 2px solid #bfbfc5;
    box-shadow: 0 0 5px #a1f4f7;
    outline: none !important;
    transition: all 100ms linear;
  }
`;
