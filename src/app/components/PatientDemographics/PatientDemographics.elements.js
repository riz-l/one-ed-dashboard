// Import: Packages
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: auto;
  margin-bottom: -1.4rem;
  justify-content: flex-start;
  /* position: relative; */
  width: 100%;
`;

// Element: Wrapper
export const Wrapper = styled.div`
  align-items: flex-start;
  background-color: #f7f8fa;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
  padding: 1rem 2rem;
  /* position: sticky;
  -webkit-position: sticky;
  top: 0; */
  width: 100%;
`;

//Element: Form Wrapper
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
  justify-content: flex-start;
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
