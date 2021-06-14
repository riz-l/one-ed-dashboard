// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Page
import Home from "./Home.component";

// Test: Checks that Home renders
it("Does the Home page render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <Home />
      </Router>
    </Provider>
  );
  const page = queryByTestId("home");
  expect(page).toBeTruthy();
});
