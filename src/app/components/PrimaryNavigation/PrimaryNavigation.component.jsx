// Import: Packages
import React, {
  // useContext,
  useEffect,
  useState,
  createContext,
} from "react";

// Import: Assets
import { ReactComponent as SaveIcon } from "../../../assets/img/icon/save.svg";

// Import: Elements
import {
  Container,
  ItemContainer,
  ItemWrapper,
  SaveContainer,
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
function Item({ isActive, ...props }) {
  return (
    <ItemContainer onClick={props.onClick}>
      <ItemWrapper isActive={isActive}>{props.children}</ItemWrapper>
    </ItemContainer>
  );
}

// Compound Component: Save
function Save({ ...props }) {
  return (
    <>
      <SaveContainer>
        <SaveIcon />
        {props.children}
      </SaveContainer>
    </>
  );
}

// Compound Component: Text
function Text({ ...props }) {
  return <TextContainer>{props.children}</TextContainer>;
}

// Component: PrimaryNavigation
export default function PrimaryNavigation({
  children,
  margin,
  padding,
  ...props
}) {
  // State: Local state
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Effect: Checks and updates inner window width
  useEffect(() => {
    // Check current windowWidth and assigns current windowWidth to state
    function updateWindowDimensions() {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);
    }
    window.addEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <PrimaryNavigationGroupContext.Provider value={props}>
      <Container
        data-testid={"primaryNavigation"}
        margin={margin}
        padding={padding}
      >
        {windowWidth <= 1440
          ? React.Children.map(children, (child, i) => {
              if (i > 1) return;
              return child;
            })
          : children}
      </Container>
    </PrimaryNavigationGroupContext.Provider>
  );
}

// Export: Shorthands for PrimaryNavigation components
PrimaryNavigation.Item = Item;
PrimaryNavigation.Save = Save;
PrimaryNavigation.Text = Text;
