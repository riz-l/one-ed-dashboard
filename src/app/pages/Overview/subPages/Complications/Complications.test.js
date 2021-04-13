// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: SubPage
import Complications from "./Complications.component";

// Test: Checks that Complications renders
it("checkComplicationsRender", () => {
  const { queryByTestId } = render(
    <Router>
      <Complications />
    </Router>
  );
  const page = queryByTestId("complications");
  expect(page).toBeTruthy();
});
