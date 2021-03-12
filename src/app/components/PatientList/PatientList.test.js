// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Component
import PatientList from "./PatientList.component";

// Test: Checks that PatientList renders
it("checkPatientListRender", () => {
  const { queryByTestId } = render(
    <Router>
      <PatientList />
    </Router>
  );
  const component = queryByTestId("patientList");
  expect(component).toBeTruthy();
});
