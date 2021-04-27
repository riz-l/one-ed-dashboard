// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: SubPage
import Referral from "./Referral.component";

// Test: Checks that NEWS2 renders
it("checkNEWS2Render", () => {
  const { queryByTestId } = render(
    <Router>
      <Referral />
    </Router>
  );
  const page = queryByTestId("referral");
  expect(page).toBeTruthy();
});
