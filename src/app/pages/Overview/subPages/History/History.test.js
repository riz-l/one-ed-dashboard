// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: SubPage
import History from "./History.component";

// Test: Checks that History renders
it("checkHistoryRender", () => {
  const { queryByTestId } = render(
    <Router>
      <History />
    </Router>
  );
  const page = queryByTestId("history");
  expect(page).toBeTruthy();
});
