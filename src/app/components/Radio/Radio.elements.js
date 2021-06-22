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

// Element: Label
export const Label = styled.label`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: auto;
`;

// Element: Input
export const Input = styled.input`
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
  height: 100%;
  opacity: 0;
  position: absolute;
  width: 100%;
`;

// Element: Text
export const Text = styled.span`
  color: #6b7a99;
`;

// Element: VisualBox
export const VisualBox = styled.div`
  align-items: center;
  background: ${({ checked }) => (checked ? "#008ba3" : "#edeff2")};
  border: 2px solid #6b7a99;
  border-radius: 50%;
  content: "";
  display: flex;
  height: 50px;
  justify-content: center;
  margin-top: 0.8rem;
  position: relative;
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
