// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";

// Import: SubPage
import Diagnosis from "./Diagnosis.component";

// Test: Checks that Diagnosis renders
it("Does the Diagnosis subPage render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <Diagnosis />
      </Router>
    </Provider>
  );
  const subPage = queryByTestId("diagnosis");
  expect(subPage).toBeTruthy();
});
