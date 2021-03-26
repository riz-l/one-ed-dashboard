// Import: Packages
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  align-items: center;
  display: flex;
  /* height: 100%; */
  justify-content: flex-start;
  /* overflow-x: auto;
  overflow-y: hidden;
  scrollbar-color: #c3cad9 #edeff2;
  scrollbar-width: thin; */
  width: 100%;
  max-width: 100%;

  margin-bottom: 0.8rem;
`;

// Element: ItemContainer
export const ItemContainer = styled.div`
  height: 100%;
  margin-right: 1rem;
  width: auto;
`;

// Element: IconContainer
export const IconContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-right: 8px;

  & svg {
    height: 18px;
    transition: all 100ms linear;
    width: 18px;
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
  border-bottom: ${({ isActive }) =>
    isActive ? "4px solid #008ba3" : "4px solid #f7f8fa"};
  cursor: pointer;
  display: flex;
  height: 100%;
  justify-content: center;
  padding: 0.8rem 0;
  transition: all 100ms linear;
  width: 100%;
  min-width: 100px;

  & ${IconContainer} {
    fill: ${({ isActive }) => (isActive ? "#008ba3" : "#c3cad9")};
  }

  & ${TextContainer} {
    color: ${({ isActive }) => (isActive ? "#008ba3" : "#6b7a99")};
  }

  &:hover {
    border-bottom: ${({ isActive }) =>
      isActive ? "4px solid #008ba3" : "4px solid #95ccd7"};
    transition: all 100ms linear;

    & ${IconContainer} {
      & svg {
        fill: ${({ isActive }) => (isActive ? "#008ba3" : "#6b7a99")};
        transition: all 100ms linear;
      }
    }

    & ${TextContainer} {
      color: ${({ isActive }) => (isActive ? "#008ba3" : "#4d5e80")};
      transition: all 100ms linear;
    }
  }
`;
