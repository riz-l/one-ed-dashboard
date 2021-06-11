// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Page
import Training from "./Training.component";

// Test: Checks that Training renders
it("Does the Training page render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <Training />
      </Router>
    </Provider>
  );
  const page = queryByTestId("training");
  expect(page).toBeTruthy();
});
