// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Page
import Seen from "./Seen.component";

// Test: Checks that Seen renders
it("checkSeenRender", () => {
  const { queryByTestId } = render(
    <Router>
      <Seen />
    </Router>
  );
  const page = queryByTestId("seen");
  expect(page).toBeTruthy();
});
