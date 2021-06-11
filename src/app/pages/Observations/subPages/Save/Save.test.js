// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";

// Import: SubPage
import Save from "./Save.component";

// Test: Checks that Save renders
it("Does the Save subPage render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <Save />
      </Router>
    </Provider>
  );
  const subPage = queryByTestId("save");
  expect(subPage).toBeTruthy();
});
