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
    red ? "#ee482a" : amber ? "#f3af4a" : green ? "#74e660" : "gray"};
  border-radius: 8px;
  color: black;
  display: flex;
  flex-direction: column;
  min-height: 5rem;
  justify-content: center;
  padding: 0.8rem;
`;
