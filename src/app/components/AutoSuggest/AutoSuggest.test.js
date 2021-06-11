// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Component
import { AutoSuggest } from "./AutoSuggest.component";

// Test: Checks that AutoSuggest renders
it("Does the AutoSuggest component render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <AutoSuggest />
      </Router>
    </Provider>
  );
  const component = queryByTestId("autoSuggest");
  expect(component).toBeTruthy();
});
