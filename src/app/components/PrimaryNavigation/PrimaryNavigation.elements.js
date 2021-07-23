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
  padding: ${({ padding }) => padding && padding};
  scrollbar-color: ${(props) => props.theme.colors.global.icon},
    ${(props) => props.theme.colors.global.borderPrimary};
  scrollbar-width: thin;
  width: 100%;
  max-width: 100%;
  transition: all 100ms linear;
  z-index: 4;
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
    fill: ${({ isActive }) =>
      isActive
        ? (props) => props.theme.colors.global.textPrimary
        : (props) => props.theme.colors.global.iconActive};
    height: 18px;
    margin-right: 0.4rem;
    transition: all 100ms linear;
    width: 18px;
  }

  &:hover {
    & svg {
      fill: ${(props) => props.theme.colors.global.textPrimary};
      transition: all 100ms linear;
    }
  }
`;

// Element: ItemWrapper
export const ItemWrapper = styled.div`
  align-items: center;
  border-bottom: 2px solid;
  border-color: ${({ isActive }) =>
    isActive
      ? (props) => props.theme.colors.incomingPatientsList.header
      : (props) => props.theme.colors.global.backgroundSecondary};
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
    color: ${({ isActive }) =>
      isActive
        ? (props) => props.theme.colors.global.textPrimary
        : (props) => props.theme.colors.global.textSecondary};
    transition: all 100ms linear;
  }

  & ${SaveContainer} {
    & svg {
      fill: ${({ isActive }) =>
        isActive
          ? (props) => props.theme.colors.global.textPrimary
          : (props) => props.theme.colors.global.textSecondary};
      transition: all 100ms linear;
    }
  }

  &:hover {
    transition: all 100ms linear;

    & ${TextContainer} {
      color: ${(props) => props.theme.colors.global.textPrimary};
      transition: all 100ms linear;
    }
  }
`;
