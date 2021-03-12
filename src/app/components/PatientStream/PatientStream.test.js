// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Component
import PatientStream from "./PatientStream.component";

// Test: Checks that PatientStream renders
it("checkPatientStreamRender", () => {
  const { queryByTestId } = render(
    <Router>
      <PatientStream />
    </Router>
  );
  const component = queryByTestId("patientStream");
  expect(component).toBeTruthy();
});
