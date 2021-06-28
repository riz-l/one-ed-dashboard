// Import: Packages
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import ReactModal from "react-modal";

// Import: Definitions
import { deviceMaxWidth } from "../../../definitions/breakPoints";

// Element: Container
export const Container = styled.header`
  background-color: ${(props) => props.theme.colors.global.backgroundSecondary};
  border-bottom: 1px solid ${(props) => props.theme.colors.global.borderPrimary};
  grid-area: header;
  height: 80px;
  max-height: 80px;
  min-height: 80px;
  -webkit-position: sticky;
  position: sticky;
  top: 0;
  transition: all 100ms linear;
  width: 100%;
  max-width: 100vw;
  z-index: 2;
`;

// Element: Wrapper
export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  width: 100%;
  min-width: 100%;
`;

// Element: LogoContainer
export const LogoContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  max-height: 100%;
  justify-content: center;
`;

// Element: LogoLink
export const LogoLink = styled(NavLink)`
  width: auto;
`;

// Element: Logo
export const Logo = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  max-height: 80px;
  justify-content: center;
  padding: 0 1rem 0 2rem;

  @media ${deviceMaxWidth.laptopL} {
    padding: 0 1rem;
  }

  & svg {
    height: 40px;
    margin-bottom: 0.8rem;
    width: auto;
  }

  & span {
    color: ${(props) => props.theme.colors.global.textPrimary};
    font-size: 2rem;
    font-weight: 600;
    transition: all 100ms linear;
  }
`;

// Element: MenuContainer
export const MenuContainer = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  transition: all 100ms linear;

  & svg {
    background-color: ${(props) =>
      props.theme.colors.global.backgroundSecondary};
    border-radius: 8px;
    fill: ${(props) => props.theme.colors.global.iconActive};
    height: 45px;
    padding: 0.6rem;
    transition: all 100ms linear;
    width: auto;
  }

  &:hover {
    & svg {
      background-color: ${(props) => props.theme.colors.patientList.rowOdd};
      fill: ${(props) => props.theme.colors.global.textPrimary};
      transition: all 100ms linear;
    }
  }
`;

// Element: UserContainer
export const UserContainer = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colors.global.backgroundSecondary};
  cursor: pointer;
  display: flex;
  height: 100%;
  max-height: 100%;
  justify-content: center;
  padding: 2rem;
  transition: all 100ms linear;

  &:hover {
    background-color: ${(props) => props.theme.colors.patientList.rowOdd};
    transition: all 100ms linear;
  }

  @media ${deviceMaxWidth.laptopL} {
    padding: 0 1rem;
  }
`;

// Element: UserIcon
export const UserIcon = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  max-height: 80px;
  justify-content: center;
  margin-right: 0.8rem;
  @media ${deviceMaxWidth.tabletL} {
    margin-right: 0;
  }

  & svg {
    fill: ${(props) => props.theme.colors.global.icon};
    transition: all 100ms linear;
  }
`;

// Element: UserDetails
export const UserDetails = styled.div`
  align-items: flex-start;
  display: flex;
  height: 100%;
  max-height: 80px;
  flex-direction: column;
  justify-content: center;

  @media ${deviceMaxWidth.tabletL} {
    display: none;
    opacity: 0;
    visibility: hidden;
  }

  & span {
    &:nth-child(1) {
      color: ${(props) => props.theme.colors.global.textPrimary};
      font-family: "PoppinsMedium", sans-serif;
      font-size: 1.2rem;
      font-weight: 500;
      margin-bottom: -0.2rem;
      transition: all 100ms linear;
    }

    &:nth-child(2) {
      color: ${(props) => props.theme.colors.global.textSecondary};
      font-size: 0.8rem;
      transition: all 100ms linear;

      @media screen and (max-width: 400px) {
        display: none;
        opacity: 0;
        visibility: hidden;
      }
    }
  }
`;

// Element: ContentWrapper
export const ContentWrapper = styled.div`
  max-height: 100%;
  overflow-y: scroll;
`;

// Element: ModalTopWrapper
export const ModalTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

// Element: StyledModal
export const StyledModal = styled(ReactModal)`
  background-color: ${(props) => props.theme.colors.global.backgroundPrimary};
  border: 1px solid ${(props) => props.theme.colors.global.borderPrimary};
  transition: all 100ms linear;
`;
