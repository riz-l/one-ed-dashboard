// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Page
import Triage from "./Triage.component";

// Test: Checks that Triage renders
it("checkTriageRender", () => {
  const { queryByTestId } = render(
    <Router>
      <Triage />
    </Router>
  );
  const page = queryByTestId("triage");
  expect(page).toBeTruthy();
});
