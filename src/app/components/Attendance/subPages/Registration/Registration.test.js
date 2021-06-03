// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";

// Import: SubPage
import Registration from "./Registration.component";

// Test: Checks that Registration renders
it("Does the Registration subPage render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <Registration />
      </Router>
    </Provider>
  );
  const subPage = queryByTestId("registration");
  expect(subPage).toBeTruthy();
});
