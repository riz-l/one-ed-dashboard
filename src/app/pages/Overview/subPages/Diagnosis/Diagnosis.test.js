// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: SubPage
import Diagnosis from "./Diagnosis.component";

// Test: Checks that Complications renders
it("checkDiagnosisRender", () => {
  const { queryByTestId } = render(
    <Router>
      <Diagnosis />
    </Router>
  );
  const page = queryByTestId("diagnosis");
  expect(page).toBeTruthy();
});
