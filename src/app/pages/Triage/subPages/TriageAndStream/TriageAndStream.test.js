// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";

// Import: SubPage
import TriageAndStream from "./TriageAndStream.component";

// Test: Checks that TriageAndStream renders
it("Does the TriageAndStream subPage render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <TriageAndStream />
      </Router>
    </Provider>
  );
  const subPage = queryByTestId("triageAndStream");
  expect(subPage).toBeTruthy();
});
