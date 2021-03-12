// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Component
import PatientSuggestions from "./PatientSuggestions.component";

// Test: Checks that PatientSuggestions renders
it("checkPatientSuggestionsRender", () => {
  const { queryByTestId } = render(
    <Router>
      <PatientSuggestions />
    </Router>
  );
  const component = queryByTestId("patientSuggestions");
  expect(component).toBeTruthy();
});
