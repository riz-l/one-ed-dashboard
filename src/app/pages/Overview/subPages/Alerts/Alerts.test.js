// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";

// Import: SubPage
import Alerts from "./Alerts.component";

// Test: Checks that Alerts renders
it("Does the Alerts subPage render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <Alerts />
      </Router>
    </Provider>
  );
  const subPage = queryByTestId("alerts");
  expect(subPage).toBeTruthy();
});
