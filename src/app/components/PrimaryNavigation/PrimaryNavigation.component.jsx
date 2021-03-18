// Import: Packages
import React, {
  // useContext,
  createContext,
} from "react";

// Import: Elements
import {
  Container,
  ItemContainer,
  ItemWrapper,
  TextContainer,
} from "./PrimaryNavigation.elements";

// Context: PrimaryNavigationGroupContext
const PrimaryNavigationGroupContext = createContext();
// const usePrimaryNavigationGroupContext = () => {
//   const context = useContext(PrimaryNavigationGroupContext);
//   if (!context) {
//     throw new Error(
//       `PrimaryNavigation compound components cannot be rendered outside of the PrimaryNavigation component`
//     );
//   }
//   return context;
// };

// Compound Component: Item
function Item({ ...props }) {
  return (
    <ItemContainer onClick={props.onClick}>
      <ItemWrapper>{props.children}</ItemWrapper>
    </ItemContainer>
  );
}

// Compound Component: Text
function Text({ ...props }) {
  return <TextContainer>{props.children}</TextContainer>;
}

// Component: PrimaryNavigation
export default function PrimaryNavigation(props) {
  return (
    <PrimaryNavigationGroupContext.Provider value={props}>
      <Container data-testid={"primaryNavigation"}>{props.children}</Container>
    </PrimaryNavigationGroupContext.Provider>
  );
}

// Export: Item, Text
PrimaryNavigation.Item = Item;
PrimaryNavigation.Text = Text;
