// Import: Packages
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.article`
  background-color: #ffffff;
  border: 1px solid #edeff2;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 0.8rem;
  transition: all 100ms linear;
  width: 100%;

  &:hover {
    box-shadow: 0 0 20px #edeff2;
    transition: all 100ms linear;
  }
`;

// Element: Wrapper
export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  padding: 1rem;
`;

// Element: IconContainer
export const IconContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 1rem;

  & svg {
    fill: #c3cad9;
    height: 45px;
    margin-bottom: 0.8rem;
    width: 45px;
  }
`;

// Element: DetailsContainer
export const DetailsContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

// Element: DetailsWrapper
export const DetailsWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: flex-start;
  width: 100%;
`;

// Element: DetailsColumn
export const DetailsColumn = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 0 1rem;
  width: auto;

  &:nth-of-type(1) {
    margin-right: 1rem;
  }
`;

// Element: DetailsRow
export const DetailsRow = styled.div`
  align-items: flex-start;
  display: flex;
  height: 100%;
  justify-content: space-between;
  width: 100%;
`;

// Element: DetailsItem
export const DetailsItem = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 0.8rem;
  margin-right: 2rem;
  width: auto;
`;

// Element: DetailsHeading
export const DetailsHeading = styled.span`
  color: #4d5e80;
  font-size: 0.8rem;
  font-weight: 600;
`;

// Element: Details
export const Details = styled.span`
  color: #6b7a99;
  font-size: 1rem;
`;
