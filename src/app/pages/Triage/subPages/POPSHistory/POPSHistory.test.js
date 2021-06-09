// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";

// Import: SubPage
import POPSHistory from "./POPSHistory.component";

// Test: Checks that POPSHistory renders
it("checkPOPSHistoryRender", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <POPSHistory />
      </Router>
    </Provider>
  );
  const subPage = queryByTestId("popsHistory");
  expect(subPage).toBeTruthy();
});
