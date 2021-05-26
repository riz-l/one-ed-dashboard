// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: SubPage
import Save from "./Save.component";

// Test: Checks that Save renders
it("checkSaveRender", () => {
  const { queryByTestId } = render(
    <Router>
      <Save />
    </Router>
  );
  const page = queryByTestId("save");
  expect(page).toBeTruthy();
});
