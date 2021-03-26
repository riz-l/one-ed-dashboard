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
  margin-right: 1.4rem;
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
  border-bottom: ${({ isActive }) =>
    isActive ? "2px solid #008ba3" : "2px solid #f7f8fa"};
  /* border-bottom: ${({ isActive }) =>
    isActive ? "2px solid #008ba3" : "2px solid #e6e9ef"}; */
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin-bottom: 0.4rem;
  padding: 0.4rem 0;
  transition: all 100ms linear;
  width: 100%;

  & ${TextContainer} {
    color: ${({ isActive }) => (isActive ? "#4d5e80" : "#6b7a99")};
  }

  &:hover {
    transition: all 100ms linear;

    & ${TextContainer} {
      color: #4d5e80;
      transition: all 100ms linear;
    }
  }
`;
