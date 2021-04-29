// Import: Packages
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 0.8rem;
`;

//Element: Wrapper
export const Wrapper = styled.div`
  align-items: center;
  background-color: ${({ red, amber, green }) =>
    red ? "red" : amber ? "amber" : green ? "green" : "gray"};
  border-radius: 1rem;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 5rem;
  padding: 0.5rem;
  width: 17rem;
`;
