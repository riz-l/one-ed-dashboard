// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";

// Import: SubPage
import NEWS2 from "./NEWS2.component";

// Test: Checks that NEWS2 renders
it("Does the NEWS2 subPage render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <NEWS2 />
      </Router>
    </Provider>
  );
  const subPage = queryByTestId("news2");
  expect(subPage).toBeTruthy();
});
