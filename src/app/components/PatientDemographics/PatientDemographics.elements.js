// Import: Packages
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: flex-start;
  width: 100%;
  max-width: 100%;
`;

// Element: Wrapper
export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: auto;
  justify-content: center;
  width: 100%;
`;

// Element: ClickableHeader
export const ClickableHeader = styled.div`
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #edeff2;
  border-radius: 8px;
  display: flex;
  height: 8rem;
  margin: 2rem 2rem 0 2rem;
  max-height: 8rem;
  min-height: 8rem;
  justify-content: flex-start;
  padding: 1rem;
  transition: all 100ms linear;
  width: 100%;

  &:hover {
    box-shadow: 0 0 20px #edeff2;
    transition: all 100ms linear;

    & svg {
      fill: #4d5e80;
      transition: all 100ms linear;
    }
  }
`;

// Element: SVGContainer
export const SVGContainer = styled.div`
  height: 100%;
  max-width: auto;
  padding: 0rem 1rem;
  width: auto;

  & svg {
    fill: #6b7a99;
    height: 100%;
    max-height: 100%;
    transition: all 100ms linear;
    width: auto;
  }

  @media (max-width: 768px) {
    display: none;
  } ;
`;

// Element: ClickableContent
export const ClickableContent = styled.div`
  align-items: center;
  display: flex;
  flex: auto;
  height: 100%;
  justify-content: space-between;
  width: 100%;
`;

// Element: CLickableText
export const ClickableText = styled.div`
  align-items: flex-start;
  display: flex;
  flex: 5;
  flex-direction: column;
  height: 100%;
  max-height: 100%;
  justify-content: center;
  width: 100%;
  max-width: 100%;

  & h2 {
    color: #6b7a99;
    font-size: 1.8rem;
    font-weight: 600;
    transition: all 100ms linear;
  }

  @media (max-width: 1024px) {
    flex: 3;
  }

  @media (max-width: 768px) {
    align-items: center;
  }

  @media (max-width: 768px) {
    flex: 1;
  } ;
`;

// Element: ClickableButtonContainter
export const ClickableButtonContainer = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: flex-end;

  @media (max-width: 1024px) {
    flex: 2;
  }

  @media (max-width: 768px) {
    flex: 1;
  } ;
`;

// Element: ClickableButton
export const ClickableButton = styled.div`
  align-items: center;
  appearance: none;
  -webkit-appearance: none;
  background-color: #4d5e80;
  border-radius: 8px;
  color: #6b7a99;
  cursor: pointer;
  display: flex;
  font-family: "Poppins", sans-serif;
  font-size: 0.4rem;
  justify-content: center;
  padding: 0.75rem 1.35rem;
  transition: all 100ms linear;
  white-space: nowrap;

  & p {
    color: white;
    font-size: 1.1rem;
  }

  &:hover {
    background-color: #475776;
    color: #4d5e80;
    transition: all 100ms linear;

    & svg {
      fill: #6b7a99;
      transition: all 100ms linear;
    }
  }

  @media (max-width: 1024px) {
    font-size: 1rem;
    padding: 1rem 1.5rem 1rem 1.5rem;
    text-align: center;
  }
  @media (max-width: 675px) {
    font-size: 0.8rem;
    padding: 0.8rem 1.3rem 0.8rem 1.3rem;
  } ;
`;

// Element: Heading
export const Heading = styled.div`
  /* background-color: #f7f8fa; */
  background-color: #ffffff;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  padding: 2rem;
  width: 100%;
`;

// Element: Heading Image
export const HeadingImage = styled.div`
  background-color: #ffffff;
  flex: 1;
  height: 100%;
  width: 100%;

  & svg {
    height: 15rem;
    width: 15rem;
  }
`;

// Element: Heading Content
export const HeadingContent = styled.div`
  background-color: #ffffff;
  height: 100%;
  max-height: 100%;
  flex: 4;

  & h2 {
    color: #4d5e80;
    font-size: 2.2rem;
  }
`;

// Element: Modal Top Wrapper
export const ModalTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

// Element: Modal Button Wrapper
export const ModalButtonWrapper = styled.div`
  margin-right: 2rem;
`;

// Element: TestGridWrapper
export const TestGridWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
`;

export const WrapperItem1 = styled.div`
  flex: 2;

  @media (max-width: 1100px) {
    flex: 3;
  }

  @media (max-width: 768px) {
    display: none;
  } ;
`;
export const WrapperItem2 = styled.div`
  flex: 5;

  @media (max-width: 1024px) {
    display: none;
  } ;
`;

export const OverFlowWrapper = styled.div`
  height: 100%;
  max-height: 100%;
  overflow-y: scroll;
`;
