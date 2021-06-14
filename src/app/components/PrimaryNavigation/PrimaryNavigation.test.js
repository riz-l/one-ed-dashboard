// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Component
import PrimaryNavigation from "./PrimaryNavigation.component";

// Test: Checks that PrimaryNavigation renders
it("Does the PrimaryNavigation component render?", () => {
  const { queryByTestId } = render(
    <Router>
      <PrimaryNavigation />
    </Router>
  );
  const component = queryByTestId("primaryNavigation");
  expect(component).toBeTruthy();
});
