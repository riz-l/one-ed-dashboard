// Import: Packages
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

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

// Element Logo
export const Logo = styled.div`
  width: 200px;
  margin-bottom: 1rem;
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
`;

// Element: ReturnButton
export const ReturnButton = styled(Link)`
  background-color: #f7f8fa;
  border: 1px solid #edeff2;
  border-radius: 8px;
  color: #6b7a99;
  cursor: pointer;
  font-family: "PoppinsRegular", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  margin-top: 1rem;
  padding: 0.4rem 1rem;
  transition: all 100ms linear;

  &:hover {
    background-color: #eef0f4;
    color: #4d5e80;
    transition: all 100ms linear;
  }
`;

// Element: CompanyLogo
export const CompanyLogo = styled.div`
  align-items: center;
  bottom: 0px;
  color: #4d5e80;
  display: flex;
  flex-direction: row;
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
