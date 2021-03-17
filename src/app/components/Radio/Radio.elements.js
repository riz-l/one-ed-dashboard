// Import: Packages
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 0.8rem;
`;

// Element: Label
export const Label = styled.label``;

// Element: Text
export const Text = styled.span`
  color: #6b7a99;
`;

// Element: Input
export const Input = styled.input`
  -webkit-appearance: none;
  cursor: pointer;
  height: 100%;
  opacity: 0;
  position: absolute;
  width: 100%;
`;

// Element: VisualBox
export const VisualBox = styled.div`
  align-items: center;
  background: ${({ checked }) => (checked ? "#008ba3" : "#edeff2")};
  border-radius: 50%;
  content: "";
  cursor: pointer;
  display: flex;
  height: 50px;
  justify-content: center;
  margin-top: 0.8rem;
  position: relative;
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
