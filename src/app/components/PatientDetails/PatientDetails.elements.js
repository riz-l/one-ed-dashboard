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
  display: flex;
  height: auto;
  justify-content: center;
  width: 100%;
`;

// Element: Form Wrapper
export const FormWrapper = styled.div`
  ${"" /* background-color: #ffffff; */}
  max-height: 19rem;
  margin-top: 0.5rem;
  padding-left: 2em;
`;

// Element: Heading
export const Heading = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

// Element: Heading Image
export const HeadingImage = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: center;
  margin: auto 0;
  padding: 0 1rem;
  width: 100%;

  /* flex: 1;
  height: 100%;
  margin-top: 0.5rem;
  padding-left: 4.5rem;
  padding-right: 6.5rem;
  padding-top: 0.7rem;
  width: 100%; */

  & svg {
    height: 260px;
    width: auto;
    max-width: 100%;

    /* height: 17rem;
    width: 17rem; */
  }
`;

// Element: Heading Content
export const HeadingContent = styled.div`
  height: 100%;
  max-height: 100%;
  flex: 4;

  & h2 {
    color: #4d5e80;
    font-size: 1.8rem;
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

// Element: Align Data
export const AlignData = styled.div`
  align-items: top;
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: flex-start;
  text-align: top;
  width: 100%;
`;

// Element: Align Data 1
export const AlignData1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-right: 0.3rem;
`;

// Element:Align Data 2
export const AlignData2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
