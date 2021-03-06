// Import: Packages
import React, {
  // useContext,
  createContext,
} from "react";

// Import: Elements
import {
  Container,
  IconContainer,
  Indicator,
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
function Item({ isActive, ...props }) {
  return (
    <ItemContainer onClick={props.onClick}>
      <ItemWrapper isActive={isActive}>{props.children}</ItemWrapper>
    </ItemContainer>
  );
}

// Compound Component: Icon
function Icon({ isRed, ...props }) {
  return (
    <IconContainer>
      {props.children}
      <Indicator isRed={isRed} />
    </IconContainer>
  );
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

// Export: Shorthands for SecondaryNavigation components
SecondaryNavigation.Item = Item;
SecondaryNavigation.Icon = Icon;
SecondaryNavigation.Text = Text;
