// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";

// Import: SubPage
import Referral from "./Referral.component";

// Test: Checks that Referral renders
it("Does the Referral subPage render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <Referral />
      </Router>
    </Provider>
  );
  const subPage = queryByTestId("referral");
  expect(subPage).toBeTruthy();
});
