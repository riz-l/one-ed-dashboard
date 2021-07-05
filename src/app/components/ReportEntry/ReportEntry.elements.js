// Import: Dependencies
import styled from "styled-components/macro";
import ReactModal from "react-modal";

// Element: Container
export const Container = styled.div`
  &:last-of-type {
    padding-bottom: 1rem;
  }
`;

// Element: Header
export const Header = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

// Element: Arrow
export const Arrow = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  & svg {
    fill: ${(props) => props.theme.colors.formComponents.tickBoxSVG};
    height: 30px;
    transition: all 100ms linear;
    width: 30px;
  }
`;

// Element: ArrowContainer
export const ArrowContainer = styled.div`
  align-items: center;
  background-color: ${({
    alerts,
    allergies,
    complaint,
    complications,
    diagnosis,
    findings,
    procedures,
    symptoms,
    themeColor,
  }) =>
    alerts
      ? (props) => props.theme.colors.reportEntry.alerts
      : allergies
      ? (props) => props.theme.colors.reportEntry.allergies
      : complaint
      ? (props) => props.theme.colors.reportEntry.complaint
      : complications
      ? (props) => props.theme.colors.reportEntry.complications
      : diagnosis
      ? (props) => props.theme.colors.reportEntry.diagnosis
      : findings
      ? (props) => props.theme.colors.reportEntry.findings
      : procedures
      ? (props) => props.theme.colors.reportEntry.procedures
      : symptoms
      ? (props) => props.theme.colors.reportEntry.symptoms
      : themeColor
      ? themeColor
      : (props) => props.theme.colors.reportEntry.noThemeEntered};
  display: flex;
  height: 100%;
  justify-content: center;
  margin: auto 0;
  position: absolute;
  right: 0;
  transition: all 100ms linear;
  width: 30px;

  &:hover {
    filter: brightness(0.8);
    transition: all 100ms linear;

    & ${Arrow} {
      & svg {
        fill: ${(props) => props.theme.colors.global.backgroundPrimary};
        transition: all 100ms linear;
      }
    }
  }
`;

// Element: Wrapper
export const Wrapper = styled.div`
  align-items: center;
  border-style: solid;
  border-width: 1px;
  border-color: ${({
    alerts,
    allergies,
    complaint,
    complications,
    diagnosis,
    findings,
    procedures,
    symptoms,
    themeColor,
  }) =>
    alerts
      ? (props) => props.theme.colors.reportEntry.alerts
      : allergies
      ? (props) => props.theme.colors.reportEntry.allergies
      : complaint
      ? (props) => props.theme.colors.reportEntry.complaint
      : complications
      ? (props) => props.theme.colors.reportEntry.complications
      : diagnosis
      ? (props) => props.theme.colors.reportEntry.diagnosis
      : findings
      ? (props) => props.theme.colors.reportEntry.findings
      : procedures
      ? (props) => props.theme.colors.reportEntry.procedures
      : symptoms
      ? (props) => props.theme.colors.reportEntry.symptoms
      : themeColor
      ? `${themeColor}`
      : (props) => props.theme.colors.reportEntry.noThemeEntered};
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
  cursor: pointer;
  display: flex;
  height: auto;
  justify-content: center;
  margin-top: 1rem;
  transition: all 100ms linear;

  &:hover {
    box-shadow: 0 0 20px ${(props) => props.theme.colors.global.borderPrimary};
    transform: translateY(-4px);
    transition: all 100ms linear;

    & ${ArrowContainer} {
      filter: brightness(0.8);
      transition: all 100ms linear;
    }
  }
`;

// Element: EntryContainer
export const EntryContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  position: relative;
  width: 100%;
`;

// Element: Left
export const Left = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
`;

// Element: Heading
export const Heading = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 0.4rem;

  & h3 {
    color: ${(props) => props.theme.colors.global.textPrimary};
    transition: all 100ms linear;
  }
`;

// Element: Icon
export const Icon = styled.div`
  align-items: center;
  background-color: ${({
    alerts,
    allergies,
    complaint,
    complications,
    diagnosis,
    findings,
    procedures,
    symptoms,
    themeColor,
  }) =>
    alerts
      ? (props) => props.theme.colors.reportEntry.alerts
      : allergies
      ? (props) => props.theme.colors.reportEntry.allergies
      : complaint
      ? (props) => props.theme.colors.reportEntry.complaint
      : complications
      ? (props) => props.theme.colors.reportEntry.complications
      : diagnosis
      ? (props) => props.theme.colors.reportEntry.diagnosis
      : findings
      ? (props) => props.theme.colors.reportEntry.findings
      : procedures
      ? (props) => props.theme.colors.reportEntry.procedures
      : symptoms
      ? (props) => props.theme.colors.reportEntry.symptoms
      : themeColor
      ? themeColor
      : (props) => props.theme.colors.reportEntry.noThemeEntered};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  padding: 0.5rem;
  margin-right: 0.6rem;
  transition: all 100ms linear;

  & svg {
    fill: ${(props) => props.theme.colors.global.backgroundPrimary};
    height: 25px;
    transition: all 100ms linear;
    width: 25px;
  }

  @media screen and (max-width: 448px) {
    display: none;
    visibility: hidden;
    margin-right: 0;
  }
`;

// Element: Detail
export const Detail = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;

  & p {
    color: ${(props) => props.theme.colors.global.textPrimary};
    transition: all 100ms linear;

    &:first-letter {
      text-transform: capitalize;
    }
  }
`;

// Element: Right
export const Right = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 2rem;
  padding: 1rem;

  & p {
    color: ${(props) => props.theme.colors.global.textPrimary};
    transition: all 100ms linear;
  }
`;

// Element: Status
export const Status = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  & p {
    &:first-letter {
      text-transform: capitalize;
    }
  }
`;

// Element: StyledModal
export const StyledModal = styled(ReactModal)`
  background-color: ${(props) => props.theme.colors.global.backgroundPrimary};
  border: 1px solid ${(props) => props.theme.colors.global.borderPrimary};
  transition: all 100ms linear;
`;
