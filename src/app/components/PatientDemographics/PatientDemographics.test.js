// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Component
import PatientDemographics from "./PatientDemographics.component";

// Test: Checks that PatientDemographics renders
it("checkPatientDemographicsRender", () => {
  const { queryByTestId } = render(
    <Router>
      <PatientDemographics />
    </Router>
  );
  const component = queryByTestId("patientDemographics");
  expect(component).toBeTruthy();
});
