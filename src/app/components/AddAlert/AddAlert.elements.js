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

// Element: FormWrapper
export const FormWrapper = styled.div`
  max-height: 100%;
  overflow-y: scroll;
`;

// Element: StyledModal
export const StyledModal = styled(ReactModal)`
  background-color: ${(props) => props.theme.colors.global.backgroundPrimary};
  border: 1px solid ${(props) => props.theme.colors.global.borderPrimary};
  transition: all 100ms linear;
`;
