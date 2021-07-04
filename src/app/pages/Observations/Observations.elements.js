// Import: Packages
import styled from "styled-components/macro";

// Import: Definitions
import { deviceMaxWidth } from "../../../definitions/breakPoints";

// Element: Container
export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.global.backgroundSecondary};
  grid-area: content;
  height: 100%;
  /* max-height: calc(100vh - 80px); */
  /* min-height: calc(100vh - 80px); */
  width: 100%;
  max-width: 100%;
  min-width: calc(100vh - 300px);
  transition: all 100ms linear;
`;

// Element: Wrapper
export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  width: 100%;
`;

// Element: ContentWrapper
export const ContentWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
  padding: 1rem 2rem;
  width: 100%;

  @media ${deviceMaxWidth.laptopL} {
    padding: 1rem;
  }
`;
