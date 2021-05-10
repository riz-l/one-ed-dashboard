// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Components
import PageTitle from "./PageTitle.component";

// Test: Checks that PageTitle renders
it("checkPageTitleRender", () => {
  const { queryByTestId } = render(
    <Router>
      <PageTitle />
    </Router>
  );
  const component = queryByTestId("pageTitle");
  expect(component).toBeTruthy();
});
