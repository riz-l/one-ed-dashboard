// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: SubPage
import RWWEdClinicianAssessment from "./RWWEdClinicianAssessment.component";

// Test: Checks that RWWEdClinicianAssessment renders
it("Does the RWWEdClinicianAssessment subPage render?", () => {
  const { queryByTestId } = render(
    <Router>
      <RWWEdClinicianAssessment />
    </Router>
  );
  const subPage = queryByTestId("rwwEdClinicianAssessment");
  expect(subPage).toBeTruthy();
});
