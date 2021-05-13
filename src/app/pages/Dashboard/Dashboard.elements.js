// Import: Packages
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  background-color: #f7f8fa;
  grid-area: content;
  height: 100%;
  max-height: calc(100vh - 80px);
  min-height: calc(100vh - 80px);
  width: 100%;
  max-width: 100%;
  min-width: calc(100vh - 300px);
`;

// Element: Layout
export const Layout = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  max-height: calc(100vh - 80px);
  min-height: calc(100vh - 80px);
  justify-content: center;
  width: 100%;
`;

// Element: List
export const List = styled.div`
  align-items: center;
  display: flex;
  flex: 1fr;
  height: 100%;
  max-height: calc(100vh - 80px);
  min-height: calc(100vh - 80px);
  justify-content: center;
  max-width: 100%;
  width: 100%;
`;

// Element: Summary
export const Summary = styled.div`
  align-items: center;
  display: flex;
  /* flex: 600px; */
  flex: ${({ isSummaryOpen }) => (!isSummaryOpen ? "0" : "600px")};
  height: 100%;
  max-height: calc(100vh - 80px);
  min-height: calc(100vh - 80px);
  justify-content: center;
  opacity: ${({ isSummaryOpen }) => (!isSummaryOpen ? "0" : "1")};
  transition: all 100ms linear;
  visibility: ${({ isSummaryOpen }) => (!isSummaryOpen ? "hidden" : "visible")};
  width: ${({ isSummaryOpen }) => (!isSummaryOpen ? "0" : "600px")};
  max-width: ${({ isSummaryOpen }) => (!isSummaryOpen ? "0" : "600px")};
  min-width: ${({ isSummaryOpen }) => (!isSummaryOpen ? "0" : "600px")};
  /* width: 100%; */
  /* max-width: 600px; */
  /* min-width: 600px; */
`;
