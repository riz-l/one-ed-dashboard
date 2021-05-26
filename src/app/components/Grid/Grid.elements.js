// Import: Packages
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  align-items: flex-start;
  display: flex;
  height: auto;
  justify-content: space-between;
  margin: auto;
  width: 100%;

  @media screen and (max-width: 1378px) {
    flex-direction: column;
  }
`;

// Element: ColumnContainer
export const ColumnContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  width: 100%;
`;

// Element: ItemContainer
export const ItemContainer = styled.div`
  align-items: flex-start;
  display: flex;
  /* flex-direction: column; */
  flex-direction: ${({ horizontal }) => (horizontal ? "row" : "column")};
  height: auto;
  justify-content: center;
  margin-bottom: 0.8rem;
  margin: ${({ margin }) => margin && margin};
`;
