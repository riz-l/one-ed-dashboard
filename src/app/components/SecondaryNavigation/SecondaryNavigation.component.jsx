// Import: Packages
import React, {
  // useContext,
  createContext,
} from "react";

// Import: Elements
import {
  Container,
  IconContainer,
  ItemContainer,
  ItemWrapper,
  TextContainer,
} from "./SecondaryNavigation.elements";

// Context: SecondaryNavigationGroupContext
const SecondaryNavigationGroupContext = createContext();
// const useSecondaryNavigationGroupContext = () => {
//   const context = useContext(SecondaryNavigationGroupContext);
//   if (!context) {
//     throw new Error(
//       `SecondaryNavigation compound components cannot be rendered outside of the SecondaryNavigation component`
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

// Compound Component: Icon
function Icon({ ...props }) {
  return <IconContainer>{props.children}</IconContainer>;
}

// Compound Component: Text
function Text({ ...props }) {
  return <TextContainer>{props.children}</TextContainer>;
}

// Component: SecondaryNavigation
export default function SecondaryNavigation(props) {
  return (
    <SecondaryNavigationGroupContext.Provider value={props}>
      <Container data-testid={"secondaryNavigation"}>
        {props.children}
      </Container>
    </SecondaryNavigationGroupContext.Provider>
  );
}

// Export: Item, Icon, Text
SecondaryNavigation.Item = Item;
SecondaryNavigation.Icon = Icon;
SecondaryNavigation.Text = Text;
