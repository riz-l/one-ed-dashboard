// Import: Packages
import styled from "styled-components/macro";

// Import: Definitions
import { deviceMaxWidth } from "../../../definitions/breakPoints";

// Element: Container
export const Container = styled.div`
  align-items: flex-start;
  background-color: ${({ backgroundColor }) =>
    backgroundColor
      ? backgroundColor
      : (props) => props.theme.colors.global.backgroundSecondary};
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
  padding: ${({ padding }) => (padding ? padding : "1rem 2rem 0 2rem")};
  transition: all 100ms linear;
  width: 100%;

  @media ${deviceMaxWidth.laptopL} {
    padding: 1rem 1rem 0 1rem;
  }

  & h2 {
    color: ${(props) => props.theme.colors.global.textPrimary};
    font-family: "PoppinsMedium", sans-serif;
    font-size: 1.6rem;
    font-weight: 500;
    transition: all 100ms linear;
  }

  & span {
    color: ${(props) => props.theme.colors.global.textSecondary};
    font-size: 0.8rem;
    transition: all 100ms linear;
  }
`;
