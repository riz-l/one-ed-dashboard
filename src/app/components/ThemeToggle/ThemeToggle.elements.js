// Import: Packages
import styled from "styled-components/macro";

// Element: ScaleSwitch
export const ScaleSwitch = styled.div`
  transform: scale(0.65);
`;

// Styled: Button
export const Button = styled.span``;

// Styled: Label
export const Label = styled.label`
  align-items: center;
  background-color: ${(props) => props.theme.colors.global.textPrimary};
  border-radius: 100px;
  cursor: pointer;
  display: flex;
  height: 50px;
  justify-content: space-between;
  position: relative;
  transition: background-color 0.2s;
  width: 100px;

  & ${Button} {
    background-color: ${(props) => props.theme.colors.global.backgroundPrimary};
    /* background-color: ${({ isGlobalThemeDark }) =>
      isGlobalThemeDark
        ? (props) => props.theme.colors.global.textPrimary
        : (props) => props.theme.colors.global.backgroundPrimary}; */
    border-radius: 46px;
    content: "";
    height: 46px;
    left: 2px;
    position: absolute;
    top: 2px;
    transition: 0.2s;
    width: 46px;
  }

  &:active ${Button} {
    width: 60px;
  }
`;

// Styled: Checkbox
export const Checkbox = styled.input`
  display: none;
  height: 0;
  visibility: hidden;
  width: 0;

  &:checked + ${Label} ${Button} {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }
`;
