// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Page
import Dashboard from "./Dashboard.component";

// Test: Checks that Dashboard renders
it("Does the Dashboard page render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <Dashboard />
      </Router>
    </Provider>
  );
  const page = queryByTestId("dashboard");
  expect(page).toBeTruthy();
});
