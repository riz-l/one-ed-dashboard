// Import: Packages
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: flex-start;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-color: #c3cad9 #edeff2;
  scrollbar-width: thin;
  width: 100%;
  max-width: 100%;
`;

// Element: ItemContainer
export const ItemContainer = styled.div`
  height: 100%;
  /* padding: 0.4rem 0; */
  margin-right: 0.4rem;
  width: auto;
`;

// Element: IconContainer
export const IconContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 4px;
  width: 100%;

  & svg {
    height: 28px;
    transition: all 100ms linear;
    width: 28px;
  }
`;

// Element: TextContainer
export const TextContainer = styled.span`
  color: #6b7a99;
  font-size: 0.8rem;
  transition: all 100ms linear;
`;

// Element: ItemWrapper
export const ItemWrapper = styled.div`
  align-items: center;
  background-color: ${({ isActive }) => (isActive ? "#e6e9ef" : "#ffffff")};
  border-left: 1px solid #edeff2;
  border-right: 1px solid #edeff2;
  border-top: ${({ isActive }) =>
    isActive ? "4px solid #4d5e80" : "1px solid #edeff2"};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  cursor: ${({ isActive }) => (isActive ? "default" : "pointer")};
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 0.4rem 1.4rem;
  text-align: center;
  transition: all 100ms linear;
  width: 100%;
  min-width: 120px;
  max-width: 120px;

  & ${IconContainer} {
    fill: ${({ isActive }) => (isActive ? "#6b7a99" : "#c3cad9")};
  }

  &:hover {
    background-color: #e6e9ef;
    border-top: ${({ isActive }) =>
      isActive ? "4px solid #4d5e80" : "1px solid #edeff2"};
    transition: all 100ms linear;

    & ${IconContainer} {
      & svg {
        fill: #6b7a99;
        transition: all 100ms linear;
      }
    }

    & ${TextContainer} {
      color: #4d5e80;
      transition: all 100ms linear;
    }
  }
`;
