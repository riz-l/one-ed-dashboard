// Import: Packages
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  height: 140px;
  max-height: 140px;
  min-height: 140px;
  margin-top: 1rem;
  width: 100%;
`;

// Element: Wrapper
export const Wrapper = styled.div`
  align-items: center;
  background-color: #f7f8fa;
  border: 1px solid #edeff2;
  border-radius: 8px;
  display: flex;
  height: 100%;
  max-height: 100%;
  min-height: 100%;
  justify-content: flex-start;
  margin: 0 2rem;
`;

// Element: IconContainer
export const IconContainer = styled.div`
  align-items: center;
  display: flex;
  flex: 200px;
  flex-direction: column;
  height: 100%;
  max-height: 100%;
  min-height: 100%;
  justify-content: center;
  padding: 1rem 0;
  width: 200px;
  max-width: 200px;

  & svg {
    fill: #6b7a99;
    height: 100%;
    width: auto;
    max-width: 200px;
  }
`;

// Element: ContentContainer
export const ContentContainer = styled.div`
  align-items: center;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  display: flex;
  flex: 1fr;
  height: 100%;
  max-height: 100%;
  min-height: 100%;
  justify-content: center;
  width: 100%;
`;

// Element: Content
export const Content = styled.div`
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #edeff2;
  border-radius: 8px;
  display: flex;
  height: calc(100% - 1rem);
  justify-content: center;
  padding: 0.4rem 0.8rem;
  margin: auto 1rem;
  width: 100%;
`;
