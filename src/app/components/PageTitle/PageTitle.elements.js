// Import: Packages
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  align-items: flex-start;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "#f7f8fa"};
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
  padding: ${({ padding }) => (padding ? padding : "1rem 2rem 0 2rem")};
  width: 100%;

  & h2 {
    color: #4d5e80;
    font-family: "PoppinsMedium", sans-serif;
    font-size: 1.6rem;
    font-weight: 500;
  }

  & span {
    color: #6b7a99;
    font-size: 0.8rem;
  }
`;
