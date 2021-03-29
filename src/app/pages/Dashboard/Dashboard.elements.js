// Import: Packages
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  grid-area: content;
  height: 100%;
  max-height: calc(100vh - 80px);
  min-height: calc(100vh - 80px);
  width: 100%;
  max-width: 100%;
`;

// Element: Layout
export const Layout = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  max-height: calc(100vh - 80px);
  justify-content: center;
  width: 100%;
`;

// Element: List
export const List = styled.div`
  align-items: center;
  display: flex;
  flex: 1.5;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

// Element: Main
export const Main = styled.div`
  align-items: center;
  display: flex;
  flex: 3;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

// Element: Top
export const Top = styled.div`
  align-items: center;
  display: flex;
  flex: 0.5;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

// Element: Bottom
export const Bottom = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: center;
  width: 100%;
`;
