// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: SubPage
import Referral from "./Referral.component";

// Test: Checks that NEWS2 renders
it("checkDecisionToAdmitRender", () => {
  const { queryByTestId } = render(
    <Router>
      <DecisionToAdmit />
    </Router>
  );
  const page = queryByTestId("decisiontoadmit");
  expect(page).toBeTruthy();
});
