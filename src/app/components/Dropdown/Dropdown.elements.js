// Import: Dependencies
import styled, { css } from "styled-components/macro";

// Import: Definitions
import { deviceMaxWidth } from "../../../definitions/breakPoints";

// Element: Container
export const Container = styled.div`
  align-items: ${({ left }) => (left ? "center" : "flex-start")};
  display: flex;
  flex-direction: ${({ left }) => (left ? "row" : "column")};
  justify-content: center;
  margin-bottom: 0.8rem;
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

// Element: Select
export const Select = styled.select`
  -webkit-appearance: none;
  appearance: none;
  background-color: #ffffff;
  border: 2px solid #edeff2;
  border-radius: 8px;
  color: #4d5e80;
  cursor: pointer;
  font-family: "PoppinsRegular", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  height: 2rem;
  padding: 0.25rem 0.8rem;
  transition: all 100ms linear;
  width: ${({ width }) => (width ? width : "300px")};

  @media ${deviceMaxWidth.tabletL} {
    width: 150px;
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

// Element: Option
export const Option = styled.option`
  -webkit-appearance: none;
  appearance: none;
  color: #4d5e80;
  cursor: pointer;
  font-family: "PoppinsRegular", sans-serif !important;
  font-size: 1rem;
  font-weight: 400;
  padding: 0.4rem 1rem;
`;
