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
  color: #6b7a99;
  margin-bottom: 0.8rem;
`;

// Element: StyledTextArea
export const StyledTextArea = styled.textarea`
  appearance: none;
  -webkit-appearance: none;
  border: 2px solid #edeff2;
  border-radius: 8px;
  color: #4d5e80;
  font-family: "Poppins", sans-serif;
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

  /* @media screen and (max-width: 848px) {
    width: 180px;
    max-width: 180px;
  } */

  &:hover {
    box-shadow: 0 0 5px #7cf0f4;
    transition: all 100ms linear;
  }

  &:focus {
    border: 2px solid #dcdfe5;
    box-shadow: 0 0 5px #a1f4f7;
    outline: none !important;
    transition: all 100ms linear;
  }
`;
