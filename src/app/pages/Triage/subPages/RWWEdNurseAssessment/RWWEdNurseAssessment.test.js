// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: SubPage
import RWWEdNurseAssessment from "./RWWEdNurseAssessment.component";

// Test: Checks that RWWEdNurseAssessment renders
it("Does the RWWEdNurseAssessment subPage render?", () => {
  const { queryByTestId } = render(
    <Router>
      <RWWEdNurseAssessment />
    </Router>
  );
  const subPage = queryByTestId("rwwEdNurseAssessment");
  expect(subPage).toBeTruthy();
});
