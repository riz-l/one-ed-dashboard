// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Page
import CASCard from "./CASCard.component";

// Test: Checks that CASCard renders
it("checkCASCardRender", () => {
  const { queryByTestId } = render(
    <Router>
      <CASCard />
    </Router>
  );
  const page = queryByTestId("casCard");
  expect(page).toBeTruthy();
});
