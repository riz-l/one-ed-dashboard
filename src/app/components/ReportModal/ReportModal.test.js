// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Component
import ReportModal from "./ReportModal.component";

// Test: Checks that ReportModal renders
it("checkReportModalRender", () => {
  const { queryByTestId } = render(
    <Router>
      <ReportModal />
    </Router>
  );
  const component = queryByTestId("reportModal");
  expect(component).toBeTruthy();
});
