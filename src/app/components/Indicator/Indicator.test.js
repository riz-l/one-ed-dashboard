// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Component
import Indicator from "./Indicator.component";

// Test: Checks that Indicator renders
it("Does the Indicator component render?", () => {
  const { queryByTestId } = render(
    <Router>
      <Indicator />
    </Router>
  );
  const component = queryByTestId("indicator");
  expect(component).toBeTruthy();
});
