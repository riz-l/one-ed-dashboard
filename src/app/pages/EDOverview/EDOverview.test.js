// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Page
import EDOverview from "./EDOverview.component";

// Test: Checks that EDOverview renders
it("checkEDOverviewRender", () => {
  const { queryByTestId } = render(
    <Router>
      <EDOverview />
    </Router>
  );
  const page = queryByTestId("edOverview");
  expect(page).toBeTruthy();
});
