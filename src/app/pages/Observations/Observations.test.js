// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Page
import Observations from "./Observations.component";

// Test: Checks that Observations renders
it("Does the Observations page render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <Observations />
      </Router>
    </Provider>
  );
  const page = queryByTestId("observations");
  expect(page).toBeTruthy();
});
