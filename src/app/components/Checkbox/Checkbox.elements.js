// Import: Packages
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 0.8rem;
  margin: ${({ margin }) =>
    margin &&
    margin}; /* At the bottom on purpose to override previous stylings if margin is passed as a prop */
`;
// Element: InputCheckbox
export const InputCheckbox = styled.input`
  -webkit-appearance: none;
  appearance: none;
  display: none;
  opacity: 0;
  visibility: hidden;
`;

// Element: Label
export const Label = styled.label`
  align-items: center;
  display: flex;
  flex-direction: ${({ left }) => (left ? "row-reverse" : "column")};
  justify-content: center;
  width: auto;
`;

// Element: Text
export const Text = styled.label`
  color: ${(props) => props.theme.colors.global.textPrimary};
  margin-left: ${({ left }) => (left ? "0.8rem" : "0rem")};
  transition: all 100ms linear;
`;

// Element: VisualBox
export const VisualBox = styled.div`
  align-items: center;
  background: ${({ checked }) =>
    checked
      ? (props) => props.theme.colors.formComponents.tickBoxChecked
      : (props) => props.theme.colors.formComponents.tickBoxUnchecked};
  border: 2px solid ${(props) => props.theme.colors.global.textSecondary};
  border-radius: 8px;
  content: "";
  cursor: pointer;
  display: flex;
  height: 50px;
  justify-content: center;
  margin-top: ${({ left }) => (left ? "0rem" : "0.8rem")};
  transition: all 100ms linear;
  width: 50px;

  & svg {
    fill: ${(props) => props.theme.colors.formComponents.tickBoxSVG};
    height: 30px;
    transition: all 100ms linear;
    width: 30px;
  }

  &:hover {
    background: ${({ checked }) =>
      checked
        ? (props) => props.theme.colors.formComponents.tickBoxCheckedHover
        : (props) => props.theme.colors.formComponents.tickBoxUncheckedHover};
    transition: all 100ms linear;
  }
`;
