// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: SubPage
import NEWS2 from "./NEWS2.component";

// Test: Checks that NEWS2 renders
it("checkNEWS2Render", () => {
  const { queryByTestId } = render(
    <Router>
      <NEWS2 />
    </Router>
  );
  const page = queryByTestId("news2");
  expect(page).toBeTruthy();
});