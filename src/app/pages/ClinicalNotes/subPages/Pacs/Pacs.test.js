// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: SubPage
import Pacs from "./Pacs.component";

// Test: Checks that Pacs renders
it("checkPacsRender", () => {
  const { queryByTestId } = render(
    <Router>
      <Pacs />
    </Router>
  );
  const page = queryByTestId("pacs");
  expect(page).toBeTruthy();
});
