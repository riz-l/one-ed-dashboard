// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Page
import Home from "./Home.component";

// Test: Checks that Home renders
it("checkHomeRender", () => {
  const { queryByTestId } = render(
    <Router>
      <Home />
    </Router>
  );
  const page = queryByTestId("home");
  expect(page).toBeTruthy();
});
