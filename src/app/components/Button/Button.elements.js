// Import: Packages
import styled from "styled-components";

// Element: Container
export const Container = styled.div`
  margin: ${({ margin }) => margin && margin};
`;

// Element: StyledButton
export const StyledButton = styled.button`
  align-items: center;
  -webkit-appearance: none;
  appearance: none;
  background-color: #f7f8fa;
  border: ${({ borderColor }) =>
    borderColor ? `1px solid ${borderColor}` : "1px solid #edeff2"};
  border-radius: 8px;
  color: #6b7a99;
  cursor: pointer;
  display: flex;
  font-family: "PoppinsRegular", sans-serif;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1rem")};
  justify-content: center;
  padding: ${({ padding }) => (padding ? padding : "0.4rem 1rem")};
  transition: all 100ms linear;
  white-space: nowrap;

  & svg {
    fill: #c3cad9;
    height: 20px;
    max-height: 20px;
    margin-right: 0.4rem;
    transition: all 100ms linear;
    width: auto;
  }

  &:hover {
    background-color: #eef0f4;
    color: #4d5e80;
    transition: all 100ms linear;

    & svg {
      fill: #6b7a99;
      transition: all 100ms linear;
    }
  }
`;
