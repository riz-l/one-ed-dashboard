// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Page
import ClinicalNotes from "./ClinicalNotes.component";

// Test: Checks that ClinicalNotes renders
it("checkClinicalNotesRender", () => {
  const { queryByTestId } = render(
    <Router>
      <ClinicalNotes />
    </Router>
  );
  const page = queryByTestId("clinicalNotes");
  expect(page).toBeTruthy();
});
