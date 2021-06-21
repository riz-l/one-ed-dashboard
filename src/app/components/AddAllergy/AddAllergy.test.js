// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Component
import AddAllergy from "./AddAllergy.component";

// Test: Checks that AddAllergy renders
it("Does the AddAllergies component render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <AddAllergy />
      </Router>
    </Provider>
  );
  const component = queryByTestId("addAllergy");
  expect(component).toBeTruthy();
});
