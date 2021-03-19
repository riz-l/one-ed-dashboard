// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: SubPage
import Alerts from "./Alerts.component";

// Test: Checks that Alerts renders
it("checkAlertsRender", () => {
  const { queryByTestId } = render(
    <Router>
      <Alerts />
    </Router>
  );
  const page = queryByTestId("alerts");
  expect(page).toBeTruthy();
});
