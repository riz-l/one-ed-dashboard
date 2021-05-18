// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: SubPage
import SaveSubPage from "./SaveSubPage.component";

// Test: Checks that SaveSubPage renders
it("checkSaveSubPageRender", () => {
  const { queryByTestId } = render(
    <Router>
      <SaveSubPage />
    </Router>
  );
  const page = queryByTestId("saveSubPage");
  expect(page).toBeTruthy();
});
