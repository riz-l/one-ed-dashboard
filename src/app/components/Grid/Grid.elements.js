// Import: Packages
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
  justify-content: space-between;
  margin: auto;
  width: 100%;
`;

// Element: ColumnContainer
export const ColumnContainer = styled.div`
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "flex-start")};
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100%;
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "flex-start"};
  width: 100%;
  min-width: 300px;
`;

// Element: ItemContainer
export const ItemContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: ${({ horizontal }) => (horizontal ? "row" : "column")};
  height: auto;
  justify-content: center;
  margin-bottom: 1rem;
  margin: ${({ margin }) => margin && margin};
  /* At the bottom on purpose to override previous stylings if margin is passed as a prop */
`;
