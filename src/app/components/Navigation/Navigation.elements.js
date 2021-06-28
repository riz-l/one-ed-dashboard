// Import: Packages
import styled, { css } from "styled-components/macro";
import { NavLink } from "react-router-dom";
const activeClassName = "nav-item-active"; //NavLink: activeClassName

// Element: Container
export const Container = styled.nav`
  background-color: ${(props) => props.theme.colors.global.backgroundSecondary};
  border-right: 1px solid ${(props) => props.theme.colors.global.borderPrimary};
  grid-area: navigation;
  height: 100%;
  max-height: calc(100vh - 80px);
  min-height: calc(100vh - 80px);
  ${({ isNavigationOpen }) =>
    !isNavigationOpen
      ? css`
          opacity: 0;
          visibility: hidden;
        `
      : null};
  overflow-y: auto;
  -webkit-position: fixed;
  position: fixed;
  top: 80px;
  transition: all 100ms linear;
  width: 300px;
  max-width: 300px;
  min-width: 300px;
  z-index: 1;

  @media screen and (max-width: 1077px) {
    ${({ isNavigationOpen }) =>
      !isNavigationOpen
        ? css`
            opacity: 0;
            visibility: hidden;
          `
        : null};
    width: 100vw;
    max-width: 100vw;
    min-width: 100vw;
  }
`;

// Element: Wrapper
export const Wrapper = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colors.global.backgroundSecondary};
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 1rem 2rem;
  transition: all 100ms linear;
  width: 100%;
`;

// Element: Options
export const Options = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

// Element: OptionsContainer
export const OptionsContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 0.8rem;
  width: 100%;
`;

// Element: OptionHeading
export const OptionHeading = styled.span`
  color: ${(props) => props.theme.colors.global.textSecondary};
  font-family: "PoppinsMedium", sans-serif;
  font-weight: 500;
  padding: 0.4rem 0;
  transition: all 100ms linear;
`;

// Element: OptionItem
export const OptionItem = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colors.global.backgroundSecondary};
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  padding: 0.4rem 0.8rem;
  transition: all 100ms linear;
  width: 100%;

  & svg {
    fill: ${(props) => props.theme.colors.global.icon};
    height: 20px;
    margin-right: 0.8rem;
    transition: all 100ms linear;
    width: 20px;
  }

  & span {
    color: ${(props) => props.theme.colors.global.textSecondary};
    /* color: ${(props) => props.theme.colors.global.iconActive}; */
    transition: all 100ms linear;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.global.borderPrimary};
    transition: all 100ms linear;

    & svg {
      fill: ${(props) => props.theme.colors.global.textSecondary};
      transition: all 100ms linear;
    }

    & span {
      color: ${(props) => props.theme.colors.global.textPrimary};
      transition: all 100ms linear;
    }
  }
`;

// Element: SettingsItem
export const SettingsItem = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colors.global.backgroundSecondary};
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  padding: 0.4rem 0.8rem;
  transition: all 100ms linear;
  width: 100%;

  & svg {
    fill: ${(props) => props.theme.colors.global.icon};
    height: 20px;
    margin-right: 0.8rem;
    transition: all 100ms linear;
    width: 20px;
  }

  & span {
    color: ${(props) => props.theme.colors.global.textSecondary};
    transition: all 100ms linear;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.global.borderPrimary};
    transition: all 100ms linear;

    & svg {
      fill: ${(props) => props.theme.colors.global.iconActive};
      transition: all 100ms linear;
    }

    & span {
      color: ${(props) => props.theme.colors.global.textPrimary};
      transition: all 100ms linear;
    }
  }
`;

// Element: OptionLink
export const OptionLink = styled(NavLink).attrs({ activeClassName })`
  width: 100%;

  &.${activeClassName} {
    & ${OptionItem} {
      background-color: ${(props) => props.theme.colors.global.borderSecondary};
      transition: all 100ms linear;

      & svg {
        fill: ${(props) => props.theme.colors.global.iconActive};
        transition: all 100ms linear;
      }

      & span {
        color: ${(props) => props.theme.colors.global.textPrimary};
        transition: all 100ms linear;
      }
    }

    & ${SettingsItem} {
      background-color: ${(props) => props.theme.colors.global.borderSecondary};
      transition: all 100ms linear;

      & svg {
        fill: ${(props) => props.theme.colors.global.iconActive};
        transition: all 100ms linear;
      }

      & span {
        color: ${(props) => props.theme.colors.global.textPrimary};
        transition: all 100ms linear;
      }
    }
  }
`;

// Element: Settings
export const Settings = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: auto;
  padding-bottom: 0.8rem;
  width: 100%;
`;
