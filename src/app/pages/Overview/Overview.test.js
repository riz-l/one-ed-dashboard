// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Page
import Overview from "./Overview.component";

// Test: Checks that Overview renders
it("Does the Overview page render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <Overview />
      </Router>
    </Provider>
  );
  const page = queryByTestId("overview");
  expect(page).toBeTruthy();
});
