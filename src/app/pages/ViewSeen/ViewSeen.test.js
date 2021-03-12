// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Page
import ViewSeen from "./ViewSeen.component";

// Test: Checks that ViewSeen renders
it("checkViewSeenRender", () => {
  const { queryByTestId } = render(
    <Router>
      <ViewSeen />
    </Router>
  );
  const page = queryByTestId("viewSeen");
  expect(page).toBeTruthy();
});
