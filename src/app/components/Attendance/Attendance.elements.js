// Import: Packages
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: flex-start;
  margin-bottom: -1.4rem;
  width: 100%;
`;

// Element: FormWrapper
export const FormWrapper = styled.div`
  max-height: 100%;
  overflow-y: scroll;
`;

// Element: Header
export const Header = styled.div`
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #edeff2;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  height: 100%;
  justify-content: space-between;
  padding: 1rem;
  transition: all 100ms linear;
  width: 100%;

  & svg {
    fill: #6b7a99;
    height: 35px;
    margin-right: 0.8rem;
    transition: all 100ms linear;
    width: 35px;
  }

  & h3 {
    color: #6b7a99;
    font-family: "PoppinsMedium", sans-serif;
    font-size: 1.4rem;
    font-weight: 500;
    transition: all 100ms linear;
  }

  &:hover {
    box-shadow: 0 0 20px #edeff2;
    transition: all 100ms linear;

    & svg {
      fill: #4d5e80;
      transition: all 100ms linear;
    }

    & h3 {
      color: #4d5e80;
      transition: all 100ms linear;
    }
  }
`;
