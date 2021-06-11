// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Component
import MoveLocation from "./MoveLocation.component";

// Test: Checks that MoveLocation renders
it("Does the MoveLocation component render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <MoveLocation />
      </Router>
    </Provider>
  );
  const component = queryByTestId("moveLocation");
  expect(component).toBeTruthy();
});
