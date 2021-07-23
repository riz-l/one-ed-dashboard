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

// Element: Select
export const Select = styled.select`
  -webkit-appearance: none;
  appearance: none;
  background-color: ${(props) => props.theme.colors.global.backgroundPrimary};
  border: 2px solid ${(props) => props.theme.colors.global.borderPrimary};
  border-radius: 8px;
  color: ${(props) => props.theme.colors.global.textPrimary};
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
    box-shadow: 0 0 5px
      ${(props) => props.theme.colors.formComponents.inputBoxHover};
    transition: all 100ms linear;
  }

  &:focus {
    border: 2px solid
      ${(props) => props.theme.colors.formComponents.inputBoxBorderFocus};
    box-shadow: 0 0 5px
      ${(props) => props.theme.colors.formComponents.inputBoxFocus};
    outline: none !important;
    transition: all 100ms linear;
  }
`;

// Element: Option
export const Option = styled.option`
  -webkit-appearance: none;
  appearance: none;
  color: ${(props) => props.theme.colors.global.textPrimary};
  cursor: pointer;
  font-family: "PoppinsRegular", sans-serif !important;
  font-size: 1rem;
  font-weight: 400;
  padding: 0.4rem 1rem;
  transition: all 100ms linear;
`;
