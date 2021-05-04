// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: SubPage
import AdmitOrReferral from "./AdmitOrReferral.component";

// Test: Checks that AdmitOrReferral renders
it("checkAdmitOrReferralRender", () => {
  const { queryByTestId } = render(
    <Router>
      <AdmitOrReferral />
    </Router>
  );
  const page = queryByTestId("admitOrReferral");
  expect(page).toBeTruthy();
});
