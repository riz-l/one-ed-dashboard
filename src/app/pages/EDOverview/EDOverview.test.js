// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Page
import EDOverview from "./EDOverview.component";

// Test: Checks that EDOverview renders
it("Does the EDOverview page render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <EDOverview />
      </Router>
    </Provider>
  );
  const page = queryByTestId("edOverview");
  expect(page).toBeTruthy();
});
