// Import: Packages
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  align-items: center;
  background-color: #f7f8fa;
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 100%;
  min-height: 100vh;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  min-width: 100%;
`;

// Element: Wrapper
export const Wrapper = styled.div`
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #edeff2;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
  padding: 2rem;

  & h1 {
    color: #4d5e80;
  }

  & p {
    color: #6b7a99;
    margin-bottom: 0.8rem;
  }
`;
export const Logo = styled.div`
  width: 200px;
  margin-bottom: 1rem;
`;

// Element: CompanyLogo
export const CompanyLogo = styled.div`
  align-items: center;
  color: #4d5e80;
  bottom: 0px;
  display: flex;
  flex-direction: row;
  position: absolute;

  & img {
    padding: 1rem;
    width: 160px;
  }
  & div {
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 360px) {
      flex-direction: column;
    }
  }
`;
