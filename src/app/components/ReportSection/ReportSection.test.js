// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Component
import ReportSection from "./ReportSection.component";

// Test: Checks that ReportSection renders
it("Does the ReportSection component render?", () => {
  const { queryByTestId } = render(
    <Router>
      <ReportSection />
    </Router>
  );
  const component = queryByTestId("reportSection");
  expect(component).toBeTruthy();
});
