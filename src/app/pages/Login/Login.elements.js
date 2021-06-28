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

// Element: Wrapper
export const Wrapper = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colors.global.backgroundPrimary};
  border: 1px solid ${(props) => props.theme.colors.global.borderPrimary};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
  padding: 2rem;
  transition: all 100ms linear;

  & h1 {
    color: ${(props) => props.theme.colors.global.textPrimary};
  }

  & p {
    color: ${(props) => props.theme.colors.global.textSecondary};
    margin-bottom: 0.8rem;
  }
`;

// Element: Logo
export const Logo = styled.div`
  margin-bottom: 1rem;
  width: 200px;
`;

// Element: CompanyLogo
export const CompanyLogo = styled.div`
  align-items: center;
  bottom: 0px;
  color: ${(props) => props.theme.colors.global.textPrimary};
  display: flex;
  position: absolute;
  transition: all 100ms linear;

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
