// Import: Packages
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 0.8rem;
`;

// Element: Wrapper
export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: ${({ under }) => (under ? "column" : "row")};
  justify-content: center;
  text-align: center;
  width: 100%;
`;

// Element: Label
export const Label = styled.label``;

// Element: InputCheckbox
export const InputCheckbox = styled.input`
  -webkit-appearance: none;
  display: none;
  opacity: 0;
  visibility: hidden;
`;

// Element: Text
export const Text = styled.label`
  color: #6b7a99;
  margin-left: ${({ under }) => (under ? "0" : "0.8rem")};
  margin-top: ${({ under }) => (under ? "0.4rem" : "0")};
`;

// Element: VisualBox
export const VisualBox = styled.div`
  align-items: center;
  background: ${({ checked }) => (checked ? "#008ba3" : "#edeff2")};
  border-radius: 8px;
  content: "";
  cursor: pointer;
  display: flex;
  height: 50px;
  justify-content: center;
  margin-top: 0.8rem;
  transition: all 100ms linear;
  width: 50px;

  & svg {
    fill: ${({ checked }) => (checked ? "#f1f1f1" : "#6b7a99")};
    height: 30px;
    transition: all 100ms linear;
    width: 30px;
  }

  &:hover {
    background: ${({ checked }) => (checked ? "#00687a" : "#c3cad9")};
    transition: all 100ms linear;

    & svg {
      fill: ${({ checked }) => (checked ? "#ffffff" : "#4d5e80")};
      transition: all 100ms linear;
    }
  }
`;
