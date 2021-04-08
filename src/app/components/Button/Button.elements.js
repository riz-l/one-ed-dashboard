// Import: Packages
import styled from "styled-components";

// Element: Container
export const Container = styled.div``;

// Element: StyledButton
export const StyledButton = styled.button`
  appearance: none;
  -webkit-appearance: none;
  background-color: #f7f8fa;
  border: 1px solid #edeff2;
  border-radius: 8px;
  color: #6b7a99;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  padding: 0.4rem 1rem;
  transition: all 100ms linear;

  &:hover {
    background-color: #eef0f4;
    color: #4d5e80;
    transition: all 100ms linear;
  }
`;
