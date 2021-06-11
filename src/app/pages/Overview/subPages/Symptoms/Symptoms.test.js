// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";

// Import: SubPage
import Symptoms from "./Symptoms.component";

// Test: Checks that Symptoms renders
it("Does the Symptoms subPage render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <Symptoms />
      </Router>
    </Provider>
  );
  const subPage = queryByTestId("symptoms");
  expect(subPage).toBeTruthy();
});
