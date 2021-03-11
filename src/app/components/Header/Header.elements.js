// Import: Packages
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.header`
  background-color: #f7f8fa;
  border-bottom: 1px solid #edeff2;
  grid-area: header;
  height: 80px;
  max-height: 80px;
  width: 100%;
  min-width: 100%;
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
  justify-content: center;
`;

// Element: Logo
export const Logo = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  max-height: 80px;
  justify-content: center;
  padding: 2rem;

  & span {
    color: #4d5e80;
    font-size: 2rem;
    font-weight: 600;
  }
`;

// Element: UserContainer
export const UserContainer = styled.div`
  align-items: center;
  background-color: #f7f8fa;
  cursor: pointer;
  display: flex;
  height: 100%;
  justify-content: center;
  padding: 2rem;
  transition: all 100ms linear;

  &:hover {
    background-color: #e6e9ef;
    transition: all 100ms linear;
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

  & svg {
    fill: #c3cad9;
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

  & span {
    &:nth-child(1) {
      color: #4d5e80;
      font-size: 1.2rem;
      font-weight: 500;
      margin-bottom: -0.2rem;
    }

    &:nth-child(2) {
      color: #6b7a99;
      font-size: 0.8rem;

      @media screen and (max-width: 400px) {
        display: none;
        opacity: 0;
        visibility: hidden;
      }
    }
  }
`;
