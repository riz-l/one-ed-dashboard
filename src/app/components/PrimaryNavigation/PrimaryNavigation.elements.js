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
  margin-right: 0.4rem;
  width: auto;
`;

// Element: TextContainer
export const TextContainer = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  transition: all 100ms linear;
`;

// Element: ItemWrapper
export const ItemWrapper = styled.div`
  align-items: center;
  background-color: ${({ isActive }) => (isActive ? "#e6e9ef" : "#ffffff")};
  border: ${({ isActive }) =>
    isActive ? "1px solid #e6e9ef" : "1px solid #edeff2"};
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 0.4rem 1.8rem;
  transition: all 100ms linear;
  width: 100%;

  & ${TextContainer} {
    color: ${({ isActive }) => (isActive ? "#4d5e80" : "#6b7a99")};
  }

  &:hover {
    background-color: #e6e9ef;
    transition: all 100ms linear;

    & ${TextContainer} {
      color: #4d5e80;
      transition: all 100ms linear;
    }
  }
`;
