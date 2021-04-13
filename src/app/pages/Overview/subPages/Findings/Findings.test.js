// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: SubPage
import Findings from "./Findings.component";

// Test: Checks that Complications renders
it("checkFindingsRender", () => {
  const { queryByTestId } = render(
    <Router>
      <Findings />
    </Router>
  );
  const page = queryByTestId("findings");
  expect(page).toBeTruthy();
});
