// Import: Packages
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  height: 100%;
  width: 100%;
  min-width: 100%;
`;

// Element: Wrapper
export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.global.backgroundPrimary};
  height: 100%;
  width: 100%;
  min-width: 100%;
  transition: all 100ms linear;
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
    fill: ${(props) => props.theme.colors.global.iconActive};
    height: 40px;
    margin-bottom: 0.4rem;
    transition: all 100ms linear;
    width: auto;
  }
`;

// Element: Suggestion
export const Suggestion = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colors.global.backgroundPrimary};
  border: 1px solid ${(props) => props.theme.colors.global.borderPrimary};
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
    box-shadow: 0 0 20px ${(props) => props.theme.colors.global.borderPrimary};
    transition: all 100ms linear;

    & span {
      color: ${(props) => props.theme.colors.global.textPrimary};
      transition: all 100ms linear;
    }

    & ${IconContainer} {
      & svg {
        fill: ${(props) => props.theme.colors.global.iconActive};
        transition: all 100ms linear;
      }
    }
  }

  & span {
    color: ${(props) => props.theme.colors.global.textSecondary};
    font-size: 1.2rem;
    transition: all 100ms linear;
  }
`;
