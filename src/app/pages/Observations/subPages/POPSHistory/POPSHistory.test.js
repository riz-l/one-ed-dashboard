// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: SubPage
import POPSHistory from "./POPSHistory.component";

// Test: Checks that POPSHistory renders
it("checkPOPSHistoryRender", () => {
  const { queryByTestId } = render(
    <Router>
      <POPSHistory />
    </Router>
  );
  const page = queryByTestId("popsHistory");
  expect(page).toBeTruthy();
});
