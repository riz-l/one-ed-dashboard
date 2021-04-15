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
  /* grid-template-rows: 60px 60px auto; */
  grid-template-rows: ${({ primaryNavigation, secondaryNavigation }) =>
    primaryNavigation && secondaryNavigation
      ? "60px 60px auto"
      : primaryNavigation && !secondaryNavigation
      ? "60px 0 auto"
      : !primaryNavigation && secondaryNavigation
      ? "0 60px auto"
      : !primaryNavigation && !secondaryNavigation
      ? "0 0 auto"
      : null};
  /* height: 100%;
  max-height: 100%;
  min-height: 100%; */
  height: auto;
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
  height: 60px;
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

// Elements: ContentContainer
export const ContentContainer = styled.div`
  height: 100%;
  width: 100%;
`;

// Elements: ContentWrapper
export const ContentWrapper = styled.div`
  background-color: #ffffff;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: ${({ secondaryNavigation }) =>
    secondaryNavigation ? "0" : "8px"};
  border-top-right-radius: 8px;
  border: 1px solid #edeff2;
  height: 100%;
  padding: 1rem;
  width: 100%;
`;
