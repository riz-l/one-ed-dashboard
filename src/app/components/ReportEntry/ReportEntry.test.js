// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Component
import ReportEntry from "./ReportEntry.component";

// Test: Checks that ReportEntry renders
it("checkReportEntryRender", () => {
  const { queryByTestId } = render(
    <Router>
      <ReportEntry />
    </Router>
  );
  const component = queryByTestId("reportEntry");
  expect(component).toBeTruthy();
});
