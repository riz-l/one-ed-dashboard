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
`;

// Element: Wrapper
export const Wrapper = styled.div`
  align-items: center;
  background-color: #f7f8fa;
  display: flex;
  height: auto;
  justify-content: center;
  width: 100%;
`;

// Element: Form Wrapper
export const FormWrapper = styled.div`
  max-height: 100%;
  overflow-y: scroll;
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
  padding: 0 1rem;
  width: auto;

  & svg {
    fill: #6b7a99;
    height: 100%;
    max-height: 100%;
    transition: all 100ms linear;
    width: auto;
  }
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
  flex: 3;
  flex-direction: column;
  height: 100%;
  justify-content: center;

  & h2 {
    color: #6b7a99;
    font-size: 1.8rem;
    font-weight: 600;
    transition: all 100ms linear;
  }
`;

// Element: ClickableButtonContainter
export const ClickableButtonContainer = styled.div`
  align-items: center;
  display: flex;
  flex: 3;
  height: 100%;
  justify-content: flex-end;
`;

// Element: ClickableButton
export const ClickableButton = styled.div`
  align-items: center;
  appearance: none;
  -webkit-appearance: none;
  background-color: #4d5e80;
  border: 1px solid #edeff2;
  border-radius: 8px;
  color: #6b7a99;
  cursor: pointer;
  display: flex;
  font-family: "Poppins", sans-serif;
  font-size: 0.5rem;
  justify-content: center;
  padding: 1rem 1.5rem 1rem 1.5rem;
  transition: all 100ms linear;

  & p {
    color: white;
    font-size: 1.3rem;
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
`;

// Element: Heading
export const Heading = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

// Element: Heading Image
export const HeadingImage = styled.div`
  height: 100%;
  width: 100%;
  flex: 1;

  & svg {
    height: 15rem;
    width: 15rem;
  }
`;

// Element: Heading Content
export const HeadingContent = styled.div`
  height: 100%;
  maximum-height: 100%;
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
export const ModalButtonWrapper = styled.div``;
