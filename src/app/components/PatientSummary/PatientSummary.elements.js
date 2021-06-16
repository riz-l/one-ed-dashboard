// Import: Packages
import styled from "styled-components/macro";

// Import: Definitions
import { deviceMaxWidth } from "../../../definitions/breakPoints";

// Element: Container
export const Container = styled.div`
  background-color: #f7f8fa;
  height: 100%;
  max-height: calc(100vh - 80px);
  min-height: calc(100vh - 80px);
  width: 600px;
  max-width: 600px;
  min-width: 600px;

  @media ${deviceMaxWidth.laptopL} {
    width: 100%;
    max-width: 100vw;
    min-width: 100%;
  }
`;

// Element: Header
export const Header = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

// Element: Wrapper
export const Wrapper = styled.div`
  align-items: center;
  background-color: #f7f8fa;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  min-width: 100%;
`;

// Element: DetailsContainer
export const DetailsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 1rem;
`;

// Element: SuggestionsContainer
export const SuggestionsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin-top: 1rem;
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
  padding: 2rem;
  transition: all 150ms linear;
  width: 100%;

  @media ${deviceMaxWidth.laptopL} {
    padding: 2rem 1rem;
  }
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
