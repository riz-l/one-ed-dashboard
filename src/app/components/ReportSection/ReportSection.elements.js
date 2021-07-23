// Import: Packages
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  background-color: transparent;
  display: grid;
  grid-template-areas:
    "primary-navigation"
    "secondary-navigation"
    "content";
  grid-template-columns: 100%;
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
  height: auto;
  width: 100%;
  max-width: 100%;
  min-width: 100%;
`;

// Element: PrimaryNavigation
export const PrimaryNavigation = styled.div`
  align-items: center;
  background-color: transparent;
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
  background-color: transparent;
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

// Element: ContentContainer
export const ContentContainer = styled.div`
  height: 100%;
  width: 100%;
`;

// Element: ContentWrapper
export const ContentWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.global.backgroundPrimary};
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: ${({ secondaryNavigation }) =>
    secondaryNavigation ? "0" : "8px"};
  border-top-right-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.global.borderPrimary};
  height: 100%;
  max-height: calc(100vh - 80px - 74px - 60px - 108px);
  min-height: calc(100vh - 80px - 74px - 60px - 108px);
  margin-bottom: 1rem;
  overflow-y: auto;
  padding: 1rem;
  scrollbar-color: ${(props) => props.theme.colors.global.icon},
    ${(props) => props.theme.colors.global.borderPrimary};
  scrollbar-width: thin;
  transition: all 100ms linear;
  width: 100%;
`;
