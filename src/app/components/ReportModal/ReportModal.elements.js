// Import: Packages
import styled from "styled-components/macro";
import ReactModal from "react-modal";

// Element: Container
export const Container = styled.div`
  height: 100%;
  width: 100%;
`;

// Element: Header
export const Header = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

// Element: Window
export const Window = styled.div`
  height: 100%;
  max-height: 100%;
  padding: 2rem 0 4rem 0;
  width: 100%;
`;

// Element: Frame
export const Frame = styled.iframe`
  border: none;
  border-radius: 8px;
  height: 100%;
  padding-bottom: 4rem;
  width: 100%;
`;

// Element: StyledModal
export const StyledModal = styled(ReactModal)`
  background-color: ${(props) => props.theme.colors.global.backgroundPrimary};
  border: 1px solid ${(props) => props.theme.colors.global.borderPrimary};
  transition: all 100ms linear;
`;
