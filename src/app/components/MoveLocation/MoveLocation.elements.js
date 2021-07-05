// Import: Packages
import styled from "styled-components/macro";
import ReactModal from "react-modal";

// Element: Container
export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: flex-start;
  margin-bottom: 1rem;
  width: 100%;
`;

// Element: FormWrapper
export const FormWrapper = styled.div`
  max-height: 100%;
  overflow-y: scroll;
`;

// Element: FormHeader
export const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

// Element: StyledModal
export const StyledModal = styled(ReactModal)`
  background-color: ${(props) => props.theme.colors.global.backgroundPrimary};
  border: 1px solid ${(props) => props.theme.colors.global.borderPrimary};
  transition: all 100ms linear;
`;
