// Import: Packages
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  background-color: #f7f8fa;
  height: 100%;
  max-height: calc(100vh - 80px);
  min-height: calc(100vh - 80px);
  width: 100%;
  max-width: 600px;
  min-width: 600px;
`;

// Element: Header
export const Header = styled.div`
  align-items: flex-start;
  background-color: #f7f8fa;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
  padding: 1rem 2rem;
  position: sticky;
  -webkit-position: sticky;
  top: 0;
  width: 100%;

  & h2 {
    color: #4d5e80;
    font-size: 1.6rem;
    font-weight: 500;
  }

  & span {
    color: #6b7a99;
    font-size: 0.8rem;
  }
`;

// Element: Wrapper
export const Wrapper = styled.div`
  background-color: #f7f8fa;
  height: auto;
  width: 100%;
`;

// Element: SummaryContainer
export const SummaryContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 1rem 2rem;
  width: 100%;
`;

// Element: Summary
export const Summary = styled.section`
  background-color: #ffffff;
  border: 1px solid #edeff2;
  border-radius: 8px;
  height: 100%;
  margin-bottom: 0.8rem;
  width: 100%;
`;

// Element: SummaryLayout
export const SummaryLayout = styled.div`
  align-items: flex-start;
  display: flex;
  height: 100%;
  justify-content: space-between;
  padding: 0 1rem;
  width: 100%;
`;

// Element: DetailsContainer
export const DetailsContainer = styled.div`
  align-items: center;
  flex-direction: column;
  display: flex;
  height: 100%;
  justify-content: center;
  padding: 1rem;
`;

// Element: DetailsItem
export const DetailsItem = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1rem;
  margin-right: 1rem;
  width: 100%;
`;

// Element: DetailsHeading
export const DetailsHeading = styled.span`
  color: #4d5e80;
  font-size: 0.8rem;
  font-weight: 600;
`;

// Element: DetailsEntry
export const DetailsEntry = styled.span`
  color: #6b7a99;
  font-size: 1rem;
`;
