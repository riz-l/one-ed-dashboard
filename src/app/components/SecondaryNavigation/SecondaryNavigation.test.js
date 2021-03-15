// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Component
import SecondaryNavigation from "./SecondaryNavigation.component";

// Test: Checks that SecondaryNavigation renders
it("checkSecondaryNavigationRender", () => {
  const { queryByTestId } = render(
    <Router>
      <SecondaryNavigation />
    </Router>
  );
  const component = queryByTestId("secondaryNavigation");
  expect(component).toBeTruthy();
});
