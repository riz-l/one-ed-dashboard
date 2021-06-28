// Import: Packages
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colors.global.backgroundSecondary};
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 100%;
  min-height: 100vh;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  transition: all 100ms linear;
`;

// Element Logo
export const Logo = styled.div`
  height: auto;
  width: 200px;
  margin-bottom: 2rem;
`;

// Element: Wrapper
export const Wrapper = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colors.global.backgroundPrimary};
  border: 1px solid ${(props) => props.theme.colors.global.borderPrimary};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  transition: all 100ms linear;

  & h1 {
    color: ${(props) => props.theme.colors.global.textPrimary};
    transition: all 100ms linear;
  }

  & a {
    background-color: ${(props) =>
      props.theme.colors.global.backgroundSecondary};
    border: 1px solid ${(props) => props.theme.colors.global.borderPrimary};
    border-radius: 8px;
    color: ${(props) => props.theme.colors.global.textSecondary};
    cursor: pointer;
    font-family: "PoppinsRegular", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    padding: 0.5rem 1rem;
    transition: all 100ms linear;

    &:hover {
      background-color: ${(props) => props.theme.colors.global.borderPrimary};
      color: ${(props) => props.theme.colors.global.textPrimary};
      transition: all 100ms linear;
    }
  }
`;

// Element: CompanyLogo
export const CompanyLogo = styled.div`
  align-items: center;
  bottom: 0px;
  color: #4d5e80;
  display: flex;
  position: absolute;

  & img {
    padding: 1rem;
    width: 160px;
  }

  & div {
    display: flex;

    @media screen and (max-width: 360px) {
      flex-direction: column;
    }
  }
`;
