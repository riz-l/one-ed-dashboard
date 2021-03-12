// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Page
import Overview from "./Overview.component";

// Test: Checks that Overview renders
it("checkOverviewRender", () => {
  const { queryByTestId } = render(
    <Router>
      <Overview />
    </Router>
  );
  const page = queryByTestId("overview");
  expect(page).toBeTruthy();
});
