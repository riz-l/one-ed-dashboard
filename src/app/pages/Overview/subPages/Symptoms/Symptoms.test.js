// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: SubPage
import Symptoms from "./Symptoms.component";

// Test: Checks that Complications renders
it("checkSymptomsRender", () => {
  const { queryByTestId } = render(
    <Router>
      <Symptoms />
    </Router>
  );
  const page = queryByTestId("symptoms");
  expect(page).toBeTruthy();
});
