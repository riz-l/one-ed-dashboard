// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Component
import Navigation from "./Navigation.component";

// Test: Checks that Navigation renders
it("Does the Navigation component render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <Navigation />
      </Router>
    </Provider>
  );
  const component = queryByTestId("navigation");
  expect(component).toBeTruthy();
});
