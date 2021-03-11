// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Page
import Dashboard from "./Dashboard.component";

// Test: Checks that Dashboard renders
it("checkDashboardRender", () => {
  const { queryByTestId } = render(
    <Router>
      <Dashboard />
    </Router>
  );
  const page = queryByTestId("dashboard");
  expect(page).toBeTruthy();
});
