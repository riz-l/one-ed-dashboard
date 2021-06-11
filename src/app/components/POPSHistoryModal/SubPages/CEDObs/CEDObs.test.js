// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";

// Import: SubPage
import CEDObs from "./CEDObs.component";

// Test: Checks that CEDObs renders
it("Does the CEDObs subPage render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <CEDObs />
      </Router>
    </Provider>
  );
  const subPage = queryByTestId("cedObs");
  expect(subPage).toBeTruthy();
});
