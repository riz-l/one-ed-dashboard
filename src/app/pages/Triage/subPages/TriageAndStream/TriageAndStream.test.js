// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: SubPage
import TriageAndStream from "./TriageAndStream.component";

// Test: Checks that TriageAndStream renders
it("checkTriageAndStreamRender", () => {
  const { queryByTestId } = render(
    <Router>
      <TriageAndStream />
    </Router>
  );
  const page = queryByTestId("triageAndStream");
  expect(page).toBeTruthy();
});
