// Import: Packages
import styled from "styled-components/macro";

// Import: Definitions
import { deviceMaxWidth } from "../../../definitions/breakPoints";

// Element: Container
export const Container = styled.div`
  background-color: #f7f8fa;
  grid-area: content;
  height: 100%;
  max-height: calc(100vh - 80px);
  min-height: calc(100vh - 80px);
  width: 100%;
  min-width: calc(100vh - 300px);

  @media ${deviceMaxWidth.laptopL} {
    width: ${({ isSummaryOpen }) => (isSummaryOpen ? "0" : "100%")};
    max-width: ${({ isSummaryOpen }) => (isSummaryOpen ? "0" : "100vw")};
    min-width: ${({ isSummaryOpen }) => (isSummaryOpen ? "0" : "100%")};
  }
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
  transition: all 100ms linear;
  width: 100%;
  max-width: 100%;

  @media ${deviceMaxWidth.laptopL} {
    width: ${({ isSummaryOpen }) => (isSummaryOpen ? "0" : "100%")};
    max-width: ${({ isSummaryOpen }) => (isSummaryOpen ? "0" : "100vw")};
    min-width: ${({ isSummaryOpen }) => (isSummaryOpen ? "0" : "100%")};
  }
`;

// Element: Summary
export const Summary = styled.div`
  align-items: center;
  border-left: 1px solid ${(props) => props.theme.colors.global.borderPrimary};
  display: flex;
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

  @media ${deviceMaxWidth.laptopL} {
    width: ${({ isSummaryOpen }) => (!isSummaryOpen ? "0" : "100%")};
    max-width: ${({ isSummaryOpen }) => (!isSummaryOpen ? "0" : "100vw")};
    min-width: ${({ isSummaryOpen }) => (!isSummaryOpen ? "0" : "100%")};
  }
`;
