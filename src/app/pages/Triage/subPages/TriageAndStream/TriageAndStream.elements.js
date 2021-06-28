// Import: Packages
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  height: 100%;
  width: 100%;
`;

// Element: Wrapper
export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.global.backgroundPrimary};
  height: 100%;
  transition: all 100ms linear;
  width: 100%;
`;
