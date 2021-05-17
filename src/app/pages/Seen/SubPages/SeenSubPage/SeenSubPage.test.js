// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: SubPage
import SeenSubPage from "./SeenSubPage.component";

// Test: Checks that SeenSubPage renders
it("checkSeenSubPageRender", () => {
  const { queryByTestId } = render(
    <Router>
      <SeenSubPage />
    </Router>
  );
  const page = queryByTestId("seenSubPage");
  expect(page).toBeTruthy();
});
