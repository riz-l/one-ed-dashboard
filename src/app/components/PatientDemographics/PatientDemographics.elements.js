// Import: Packages
import styled, { css } from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: flex-start;
  width: 100%;
  max-width: 100%;

  @media (max-width: 768px) {
    cursor: pointer;
  }
`;

// Element ContentWrapper
export const ContentWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
  padding: 1rem 2rem;
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
    font-family: "PoppinsSemiBold", sans-serif;
    font-size: 1.8rem;
    font-weight: 600;
    transition: all 100ms linear;
  }

  @media (max-width: 1024px) {
    flex: 3;
  }
  @media (max-width:400px) {
    & h2 {
      font-size:1.2rem;
    }
  }

  
  }
`;

// Element: ClickableButton
export const ClickableButton = styled.div`
  align-items: center;
  -webkit-appearance: none;
  appearance: none;
  background-color: #4d5e80;
  border-radius: 8px;
  color: #6b7a99;
  cursor: pointer;
  display: flex;
  font-family: "PoppinsRegular", sans-serif;
  font-size: 0.4rem;
  font-weight: 400;
  justify-content: center;
  margin: 0 0 3rem 0;
  padding: 0.8rem 1.2rem;
  transition: all 100ms linear;
  white-space: nowrap;

  & p {
    color: white;
    font-size: 1rem;
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
    padding: 1rem 1.5rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    display: none;
  }

  @media (max-width: 675px) {
    font-size: 0.8rem;
    padding: 0.8rem 1.3rem;
  } ;
`;

// Element: Heading
export const Heading = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  padding: 2rem;
  width: 100%;
`;

// Element: HeadingImage
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

// Element: HeadingContent
export const HeadingContent = styled.div`
  background-color: #ffffff;
  flex: 4;
  height: 100%;
  max-height: 100%;

  & h2 {
    color: #4d5e80;
    font-size: 2.2rem;
  }
`;

// Element: ModalTopWrapper
export const ModalTopWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

// Element: ModalButtonWrapper
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

// Element: WrapperItem1
export const WrapperItem1 = styled.div`
  flex: ${({ summary }) => (summary ? "1.5" : "5")};
  font-size: ${({ summary }) => (summary ? "0.9rem" : "1rem")};
  & span {
    font-size: ${({ summary }) => (summary ? "0.9rem" : "1rem")};
  }

  @media (max-width: 1300px) {
    flex: 3.5;
  }

  @media (max-width: 1044px) {
    padding-top: 0.4rem;
  }
  @media (max-width: 768px) {
    padding-bottom: 0.5rem;
  }
`;

// Element: WrapperItem2
export const WrapperItem2 = styled.div`
  flex: ${({ summary }) => (summary ? "2" : "5")};
  font-size: ${({ summary }) => (summary ? "0.9rem" : "1rem")};
  & span {
    font-size: ${({ summary }) => (summary ? "0.9rem" : "1rem")};
  }

  @media (max-width: 1300px) {
    flex: 7;
  }

  @media (max-width: 1079px) {
    display: none;
  }
`;

// Element: OverFlowWrapper
export const OverFlowWrapper = styled.div`
  height: 100%;
  max-height: 100%;
  overflow-y: scroll;
`;

// Element: NewWrapper
export const NewWrapper = styled.div`
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #edeff2;
  border-radius: 8px;
  display: flex;
  height: 8rem;
  justify-content: center;
  margin: 2rem 2rem 0 2rem;
  max-height: 8rem;
  min-height: 8rem;
  padding: 1rem 1rem 1rem 3rem;
  padding: ${({ summary }) => (summary ? "0" : "1rem 1rem 1rem 3rem")};
  transition: all 100ms linear;
  width: 100%;
  max-width: 100%;

  &:hover {
    box-shadow: 0 0 20px #edeff2;
    transition: all 100ms linear;

    & svg {
      fill: #4d5e80;
      transition: all 100ms linear;
    }
  }

  ${({ summary, windowWidth }) => {
    switch (true) {
      case summary && windowWidth >= 2500:
        return css`
          background-color: red;
        `;
      case summary && windowWidth >= 1440:
        return css``;
      case summary && windowWidth >= 1024:
        return css`
          background-color: green;
        `;
      default:
        return css`
          background-color: transparent;
        `;
    }
  }};
  @media (max-width: 610px) {
    margin: 0;
    padding: 0;
  }
`;

// Element: NewSVGSection
export const NewSVGSection = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: center;
  width: 100%;
  max-width: auto;

  & svg {
    fill: #6b7a99;
    height: 100%;
    max-height: 100%;
    transition: all 100ms linear;
    width: auto;
  }

  @media (max-width: 610px) {
    display: none;
  } ;
`;

// Element: NewDataSection
export const NewDataSection = styled.div`
  align-items: end;
  flex: 5;
  height: 100%;
  padding: ${({ summary }) => (summary ? "1rem" : "2rem 0 0 2rem")};
  width: 100%;
  @media (max-width: 1079px) {
    flex: 2;
  }
  @media (max-width: 350px) {
    padding: 2rem 0 0 0;
  }
`;

// Element: NewButtonSection
export const NewButtonSection = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

// Element: Arrow
export const Arrow = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  & svg {
    fill: #f1f1f1;
    height: 30px;
    transition: all 100ms linear;
    width: 30px;
  }
`;

// Element: ArrowContainer
export const ArrowContainer = styled.div`
  align-items: center;
  background-color: red;
  cursor: pointer;
  display: flex;
  height: 80%;
  max-height: 100%;
  justify-content: center;
  margin: 2rem 0rem 0 0;
  position: absolute;
  right: 0;
  transition: all 100ms linear;
  width: 30px;

  &:hover {
    filter: brightness(0.8);
    transition: all 100ms linear;

    & ${Arrow} {
      & svg {
        fill: #ffffff;
        transition: all 100ms linear;
      }
    }
  }
  @media (max-width: 610px) {
    height: 100%;
    margin: 0rem 2rem 0 0;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

export const DataAndArrowWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  margin: 0;
  padding: 0;
`;
