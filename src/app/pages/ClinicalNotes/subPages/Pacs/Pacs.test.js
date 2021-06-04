// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: SubPage
import Pacs from "./Pacs.component";

// Test: Checks that Pacs renders
it("Does the Pacs subPage render?", () => {
  const { queryByTestId } = render(
    <Router>
      <Pacs />
    </Router>
  );
  const subPage = queryByTestId("pacs");
  expect(subPage).toBeTruthy();
});
