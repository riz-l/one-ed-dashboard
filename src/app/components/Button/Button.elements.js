// Import: Packages
import styled from "styled-components";

// Element: Container
export const Container = styled.div`
  margin: ${({ margin }) => margin && margin};
`;

// Element: StyledButton
export const StyledButton = styled.button`
  align-items: center;
  -webkit-appearance: none;
  appearance: none;
  background-color: ${(props) => props.theme.colors.global.backgroundSecondary};
  border-width: 1px;
  border-style: solid;
  border-color: ${({ borderColor }) =>
    borderColor
      ? borderColor
      : (props) => props.theme.colors.global.borderPrimary};

  border-radius: 8px;
  color: ${(props) => props.theme.colors.global.textSecondary};
  cursor: pointer;
  display: flex;
  font-family: "PoppinsRegular", sans-serif;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1rem")};
  font-weight: 400;
  justify-content: center;
  padding: ${({ padding }) => (padding ? padding : "0.4rem 1rem")};
  transition: all 100ms linear;
  white-space: nowrap;

  & svg {
    fill: ${(props) => props.theme.colors.global.icon};
    height: 20px;
    max-height: 20px;
    margin-right: 0.4rem;
    transition: all 100ms linear;
    width: auto;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.global.borderPrimary};
    color: ${(props) => props.theme.colors.global.textPrimary};
    transition: all 100ms linear;

    & svg {
      fill: ${(props) => props.theme.colors.global.iconActive};
      transition: all 100ms linear;
    }
  }
`;
