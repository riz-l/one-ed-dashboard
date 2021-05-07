// Import: Packages
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: flex-start;
  /* overflow-x: auto;
  overflow-y: hidden;
  scrollbar-color: #c3cad9 #edeff2;
  scrollbar-width: thin; */
  width: 100%;
  max-width: 100%;
  /* margin-bottom: 0.8rem; */
`;

// Element: ItemContainer
export const ItemContainer = styled.div`
  /* height: 100%; */
  margin-right: 0.4rem;
  margin-top: auto;
  width: auto;
`;

// Element: IconContainer
export const IconContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-right: 8px;
  position: relative;

  & svg {
    height: 18px;
    transition: all 100ms linear;
    width: 18px;
  }
`;

// Element: Indicator
export const Indicator = styled.div`
  background-color: tomato;
  border-radius: 80%;
  content: "";
  height: 10px;
  position: absolute;
  right: -4px;
  top: 2px;
  width: 10px;
`;

// Element: TextContainer
export const TextContainer = styled.span`
  color: #6b7a99;
  font-size: 0.8rem;
  font-weight: 500;
  transition: all 100ms linear;
`;

// Element: ItemWrapper
export const ItemWrapper = styled.div`
  align-items: center;
  background-color: ${({ isActive }) => (isActive ? "#e6e9ef" : "#f7f8fa")};
  /* border-radius: 8px; */
  border: 1px solid #edeff2;
  border-bottom: none;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  cursor: pointer;
  display: flex;
  height: 100%;
  justify-content: center;
  padding: 0.8rem 0.8rem;
  transition: all 100ms linear;
  width: 100%;
  min-width: 100px;

  & ${IconContainer} {
    fill: ${({ isActive }) => (isActive ? "#6b7a99" : "#c3cad9")};
  }

  & ${TextContainer} {
    color: ${({ isActive }) => (isActive ? "#4d5e80" : "#6b7a99")};
  }

  &:hover {
    background-color: ${({ isActive }) => (isActive ? "#e6e9ef" : "#eef0f4")};
    transition: all 100ms linear;

    & ${IconContainer} {
      & svg {
        fill: ${({ isActive }) => (isActive ? "#6b7a99" : "#6b7a99")};
        transition: all 100ms linear;
      }
    }

    & ${TextContainer} {
      color: ${({ isActive }) => (isActive ? "#4d5e80" : "#4d5e80")};
      transition: all 100ms linear;
    }
  }
`;
