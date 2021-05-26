// Import: Packages
import styled from "styled-components/macro";

// Element: Container
// export const Container = styled.div`
//   align-items: center;
//   display: flex;
//   flex-direction: column;
//   height: auto;
//   justify-content: flex-start;
//   width: 100%;
// `;

// Element: Wrapper
// export const Wrapper = styled.div`
//   align-items: center;
//   display: flex;
//   height: auto;
//   justify-content: center;
//   width: 100%;
// `;

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
    height: 160px;
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

// ================================
// === RIZ'S CODE ==================
// ================================

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
