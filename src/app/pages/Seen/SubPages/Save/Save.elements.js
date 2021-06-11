// Import: Packages
import styled from "styled-components/macro";

// Elements: Container
export const Container = styled.div`
  height: 100%;
  width: 100%;
`;

// Elements: Wrapper
export const Wrapper = styled.div`
  background-color: #ffffff;
  height: 100%;
  width: 100%;
`;

// Element: Suggestions
export const Suggestions = styled.div`
  align-items: center;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  height: auto;
  justify-content: center;
  margin-top: 1rem;
  transition: all 150ms linear;
  width: 100%;
`;

// Element: IconContainer
export const IconContainer = styled.div`
  align-items: center;
  display: flex;
  height: auto;
  justify-content: center;
  width: 100%;

  & svg {
    fill: #6b7a99;
    height: 40px;
    margin-bottom: 0.4rem;
    transition: all 100ms linear;
    width: auto;
  }
`;

// Element: Suggestion
export const Suggestion = styled.div`
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #edeff2;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 140px;
  max-height: 140px;
  min-height: 140px;
  justify-content: center;
  padding: 2rem;
  transition: all 100ms linear;
  width: 100%;

  &:hover {
    box-shadow: 0 0 20px #edeff2;
    transition: all 100ms linear;

    & span {
      color: #4d5e80;
      transition: all 100ms linear;
    }

    & ${IconContainer} {
      & svg {
        fill: #6b7a99;
        transition: all 100ms linear;
      }
    }
  }

  & span {
    color: #6b7a99;
    font-size: 1.2rem;
    transition: all 100ms linear;
  }
`;

// Element: Next
export const Next = styled.span`
  font-family: "PoppinsMedium", sans-serif;
  font-weight: 500;
`;
