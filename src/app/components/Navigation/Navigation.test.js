// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Component
import Navigation from "./Navigation.component";

// Test: Checks that Navigation renders
it("checkNavigationRender", () => {
  const { queryByTestId } = render(
    <Router>
      <Navigation />
    </Router>
  );
  const component = queryByTestId("navigation");
  expect(component).toBeTruthy();
});
