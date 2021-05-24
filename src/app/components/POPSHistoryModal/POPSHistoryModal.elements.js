// Import: Dependencies
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  &:last-of-type {
    padding-bottom: 1rem;
  }
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
  background-color: #6b7a99;
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
        fill: #ffffff;
        transition: all 100ms linear;
      }
    }
  }
`;

// Element: Wrapper
export const Wrapper = styled.div`
  align-items: center;
  border: 1px solid #6b7a99;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
  cursor: pointer;
  display: flex;
  height: auto;
  justify-content: center;
  margin-top: 1rem;
  transition: all 100ms linear;

  &:hover {
    box-shadow: 0 0 20px #edeff2;
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
    color: #6b7a99;
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

// Element: Right
export const Right = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 2rem;
  padding: 1rem;

  & p {
    color: #4d5e80;
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
