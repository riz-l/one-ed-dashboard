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
  /* flex-direction: column ; */
  flex-direction: ${({ left }) => (left ? "row-reverse" : "column")};
  justify-content: center;
  width: auto;
`;

// Element: Text
export const Text = styled.label`
  color: #6b7a99;
  margin-left: ${({ left }) => (left ? "0.8rem" : "0rem")};
  /* margin-top: ${({ under }) => (under ? "0.4rem" : "0")}; */
`;

// Element: VisualBox
export const VisualBox = styled.div`
  align-items: center;
  background: ${({ checked }) => (checked ? "#008ba3" : "#edeff2")};
  border: 2px solid #6b7a99;
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
    fill: #f1f1f1;
    height: 30px;
    transition: all 100ms linear;
    width: 30px;
  }

  &:hover {
    background: ${({ checked }) => (checked ? "#00687a" : "#c3cad9")};
    transition: all 100ms linear;

    & svg {
      fill: #ffffff;
      transition: all 100ms linear;
    }
  }
`;
