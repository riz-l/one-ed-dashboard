// Import: Packages
import React, {
  // useContext,
  createContext,
} from "react";

// Import: Elements
import { ColumnContainer, Container, ItemContainer } from "./Grid.elements";

// Context: GridGroupContext
const GridGroupContext = createContext();
// const useGridGroupContext = () => {
//   const context = useContext(GridGroupContext);
//   if (!context) {
//     throw new Error(
//       `Grid compound components cannot be rendered outside of the Grid component`
//     );
//   }
//   return context;
// };

// Compound Component: Column
function Column({ ...props }) {
  return (
    <ColumnContainer
      alignItems={props.alignItems}
      justifyContent={props.justifyContent}
    >
      {props.children}
    </ColumnContainer>
  );
}

// Compound Component: Item
function Item({ ...props }) {
  return (
    <ItemContainer horizontal={props.horizontal} margin={props.margin}>
      {props.children}
    </ItemContainer>
  );
}

// Component: Grid
export default function Grid(props) {
  return (
    <GridGroupContext.Provider value={props}>
      <Container data-testid={"grid"}>{props.children}</Container>
    </GridGroupContext.Provider>
  );
}

// Export: Shorthands for Grid components
Grid.Column = Column;
Grid.Item = Item;
