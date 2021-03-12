// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Component
import PatientSummary from "./PatientSummary.component";

// Test: Checks that PatientSummary renders
it("checkPatientSummaryRender", () => {
  const { queryByTestId } = render(
    <Router>
      <PatientSummary />
    </Router>
  );
  const component = queryByTestId("patientSummary");
  expect(component).toBeTruthy();
});
