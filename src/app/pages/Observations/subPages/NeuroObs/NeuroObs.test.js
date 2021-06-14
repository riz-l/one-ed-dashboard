// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";

// Import: SubPage
import NeuroObs from "./NeuroObs.component";

// Test: Checks that NeuroObs renders
it("Does the NeuroObs subPage render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <NeuroObs />
      </Router>
    </Provider>
  );
  const subPage = queryByTestId("neuroObs");
  expect(subPage).toBeTruthy();
});
