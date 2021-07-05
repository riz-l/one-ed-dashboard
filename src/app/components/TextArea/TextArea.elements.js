// Import: Packages
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1rem;
  width: 100%;
  max-width: 100%;
  min-width: 100%;
`;

// Element: Label
export const Label = styled.label`
  color: ${(props) => props.theme.colors.global.textSecondary};
  margin-bottom: 0.8rem;
  transition: all 100ms linear;
`;

// Element: StyledTextArea
export const StyledTextArea = styled.textarea`
  -webkit-appearance: none;
  appearance: none;
  background-color: ${(props) => props.theme.colors.global.backgroundPrimary};
  border: 2px solid ${(props) => props.theme.colors.global.borderPrimary};
  border-radius: 8px;
  color: ${(props) => props.theme.colors.global.textPrimary};
  font-family: "PoppinsRegular", sans-serif;
  font-weight: 400;
  padding: 1rem;
  transition: all 100ms linear;
  -webkit-user-select: auto;
  -khtml-user-select: auto;
  -moz-user-select: auto;
  -ms-user-select: auto;
  user-select: auto;
  width: 100%;
  max-width: 100%;
  min-width: 100%;

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
