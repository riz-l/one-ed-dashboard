// Import: Packages
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  background-color: #ffffff;
  display: grid;
  grid-template-areas:
    "primary-navigation"
    "secondary-navigation"
    "content";
  grid-template-columns: 100%;
  grid-template-rows: 60px 50px auto;
  height: 100%;
  max-height: 100%;
  min-height: 100%;
  width: 100%;
  max-width: 100%;
  min-width: 100%;
`;

// Element: PrimaryNavigation
export const PrimaryNavigation = styled.div`
  align-items: center;
  background-color: #f7f8fa;
  display: flex;
  grid-area: primary-navigation;
  height: 60px;
  max-height: 100%;
  min-height: 100%;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  min-width: 100%;
`;

// Element: SecondaryNavigation
export const SecondaryNavigation = styled.div`
  align-items: center;
  background-color: #f7f8fa;
  /* background-color: red; */
  display: flex;
  grid-area: secondary-navigation;
  height: 100px;
  max-height: 100%;
  min-height: 100%;
  justify-content: center;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
`;

// Element: Content
export const Content = styled.div`
  align-items: center;
  background-color: #f7f8fa;
  display: flex;
  grid-area: content;
  height: auto;
  max-height: 100%;
  min-height: 100%;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  min-width: 100%;
`;
