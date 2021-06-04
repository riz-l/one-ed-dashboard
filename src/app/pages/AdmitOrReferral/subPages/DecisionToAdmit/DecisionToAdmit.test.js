// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";

// Import: SubPage
import DecisionToAdmit from "./DecisionToAdmit.component";

// Test: Checks that DecisionToAdmit renders
it("Does the DecisionToAdmit subPage render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <DecisionToAdmit />
      </Router>
    </Provider>
  );
  const subPage = queryByTestId("decisionToAdmit");
  expect(subPage).toBeTruthy();
});
