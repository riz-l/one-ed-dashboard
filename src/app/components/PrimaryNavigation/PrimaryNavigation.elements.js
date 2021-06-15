// Import: Packages
import styled from "styled-components/macro";

// Import: Definitions
import { deviceMaxWidth } from "../../../definitions/breakPoints";

// Element: Container
export const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: flex-start;
  margin: ${({ margin }) => margin && margin};
  overflow-x: auto;
  overflow-y: hidden;
  padding: 1rem 0 0 2rem;
  padding: ${({ padding }) => padding && padding};
  scrollbar-color: #c3cad9 #edeff2;
  scrollbar-width: thin;
  width: 100%;
  max-width: 100%;
  z-index: 4;

  @media ${deviceMaxWidth.laptopL} {
    padding: 1rem 0 0 1rem;
  }
`;

// Element: ItemContainer
export const ItemContainer = styled.div`
  margin-right: 1.4rem;
  width: auto;
`;

// Element: TextContainer
export const TextContainer = styled.span`
  font-family: "PoppinsMedium", sans-serif;
  font-size: 1.2rem;
  font-weight: 500;
  transition: all 100ms linear;

  @media ${deviceMaxWidth.mobileL} {
    font-size: 1.1rem;
  }
`;

// Element: SaveContainer
export const SaveContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: flex-start;
  transition: all 100ms linear;
  width: 100%;
  max-width: 100%;

  & svg {
    fill: ${({ isActive }) => (isActive ? "#4d5e80" : "#6b7a99")};
    height: 18px;
    margin-right: 0.4rem;
    transition: all 100ms linear;
    width: 18px;
  }

  &:hover {
    & svg {
      fill: #4d5e80;
      transition: all 100ms linear;
    }
  }
`;

// Element: ItemWrapper
export const ItemWrapper = styled.div`
  align-items: center;
  border-bottom: ${({ isActive }) =>
    isActive ? "2px solid #008ba3" : "2px solid #f7f8fa"};
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

  & ${SaveContainer} {
    & svg {
      fill: ${({ isActive }) => (isActive ? "#4d5e80" : "#6b7a99")};
    }
  }

  &:hover {
    transition: all 100ms linear;

    & ${TextContainer} {
      color: #4d5e80;
      transition: all 100ms linear;
    }
  }
`;
