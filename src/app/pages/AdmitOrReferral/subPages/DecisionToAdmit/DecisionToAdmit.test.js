// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: SubPage
import DecisionToAdmit from "./DecisionToAdmit.component";

// Test: Checks that DecisionToAdmit renders
it("checkDecisionToAdmitRender", () => {
  const { queryByTestId } = render(
    <Router>
      <DecisionToAdmit />
    </Router>
  );
  const page = queryByTestId("decisionToAdmit");
  expect(page).toBeTruthy();
});
