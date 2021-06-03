// Import: Dependencies
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  &:last-of-type {
    padding-bottom: 1rem;
  }
`;

// Element: Wrapper
export const Wrapper = styled.div`
  align-items: center;
  border: 1px solid #edeff2;
  border-radius: 8px;
  display: flex;
  height: auto;
  justify-content: center;
  margin-top: 1rem;
  transition: all 100ms linear;
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
    color: #6b7a99;
    font-family: "PoppinsBold", sans-serif;
    font-weight: 700;
  }
`;

// Element: Icon
export const Icon = styled.div`
  align-items: center;
  background-color: #6b7a99;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  padding: 0.5rem;
  margin-right: 0.6rem;

  & svg {
    fill: #ffffff;
    height: 25px;
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
    color: #4d5e80;

    &:first-letter {
      text-transform: capitalize;
    }
  }
`;

// Element: Status
export const Status = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  & p {
    color: #4d5e80;

    &:first-letter {
      text-transform: capitalize;
    }
  }
`;
