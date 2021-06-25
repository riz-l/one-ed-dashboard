// Import: Packages
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: flex-start;
  width: 100%;
  max-width: 100%;
`;

// Element: ItemContainer
export const ItemContainer = styled.div`
  margin-right: 0.4rem;
  margin-top: auto;
  width: auto;
`;

// Element: IconContainer
export const IconContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-right: 8px;
  position: relative;

  & svg {
    height: 18px;
    transition: all 100ms linear;
    width: 18px;
  }
`;

// Element: Indicator
export const Indicator = styled.div`
  background-color: ${(props) => props.theme.colors.reportEntry.alerts};
  border-radius: 80%;
  content: "";
  height: 10px;
  opacity: ${({ isRed }) => (isRed ? "1" : "0")};
  position: absolute;
  right: -4px;
  top: 2px;
  transition: all 100ms linear;
  visibility: ${({ isRed }) => (isRed ? "1" : "0")};
  width: 10px;
`;

// Element: TextContainer
export const TextContainer = styled.span`
  color: ${(props) => props.theme.colors.global.textSecondary};
  font-family: "PoppinsMedium", sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  transition: all 100ms linear;
`;

// Element: ItemWrapper
export const ItemWrapper = styled.div`
  align-items: center;
  background-color: ${({ isActive }) =>
    isActive
      ? (props) => props.theme.colors.patientList.rowOdd
      : (props) => props.theme.colors.global.backgroundSecondary};
  border: 1px solid ${(props) => props.theme.colors.global.borderPrimary};
  border-bottom: none;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  cursor: pointer;
  display: flex;
  height: 100%;
  justify-content: center;
  padding: 0.8rem 0.8rem;
  transition: all 100ms linear;
  width: 100%;
  min-width: 100px;

  & ${IconContainer} {
    fill: ${({ isActive }) =>
      isActive
        ? (props) => props.theme.colors.global.iconActive
        : (props) => props.theme.colors.global.icon};
    transition: all 100ms linear;
  }

  & ${TextContainer} {
    color: ${({ isActive }) =>
      isActive
        ? (props) => props.theme.colors.global.textPrimary
        : (props) => props.theme.colors.global.textSecondary};
    transition: all 100ms linear;
  }

  &:hover {
    background-color: ${({ isActive }) =>
      isActive
        ? (props) => props.theme.colors.patientList.rowOdd
        : (props) => props.theme.colors.global.borderPrimary};
    transition: all 100ms linear;

    & ${IconContainer} {
      & svg {
        fill: ${({ isActive }) =>
          isActive
            ? (props) => props.theme.colors.global.iconActive
            : (props) => props.theme.colors.global.iconActive};
        transition: all 100ms linear;
      }
    }

    & ${TextContainer} {
      color: ${({ isActive }) =>
        isActive
          ? (props) => props.theme.colors.global.textPrimary
          : (props) => props.theme.colors.global.textPrimary};
      transition: all 100ms linear;
    }
  }
`;
