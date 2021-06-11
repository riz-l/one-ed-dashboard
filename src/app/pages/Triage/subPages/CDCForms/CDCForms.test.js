// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: SubPage
import CDCForms from "./CDCForms.component";

// Test: Checks that CDCForms renders
it("checkCDCFormsRender", () => {
  const { queryByTestId } = render(
    <Router>
      <CDCForms />
    </Router>
  );
  const page = queryByTestId("cdcForms");
  expect(page).toBeTruthy();
});
