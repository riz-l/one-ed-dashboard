// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Component
import PatientItem from "./PatientItem.component";

// Test: Checks that PatientItem renders
it("checkPatientItemRender", () => {
  const { queryByTestId } = render(
    <Router>
      <PatientItem />
    </Router>
  );
  const component = queryByTestId("patientItem");
  expect(component).toBeTruthy();
});
