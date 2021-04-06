// Import: Packages
import React, {
  // useContext,
  createContext,
} from "react";

// Import: Elements
import { Container } from "./Form.elements";

// Context: FormGroupContext
const FormGroupContext = createContext();
// const useFormGroupContext = () => {
//   const context = useContext(FormGroupContext);
//   if (!context) {
//     throw new Error(
//       `Form compound components cannot be rendered outside of the Form component`
//     );
//   }

//   return context;
// };

// Compound Component: Column
// function Column({ ...props }) {
//   return <ColumnContainer>{props.children}</ColumnContainer>;
// }

// Component: Form
export default function Form(props) {
  return (
    <FormGroupContext.Provider value={props}>
      <Container data-testid={"form"}>{props.children}</Container>
    </FormGroupContext.Provider>
  );
}

// Export: Column
// Form.Column = Column;
