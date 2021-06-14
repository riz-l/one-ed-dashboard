// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Component
import AddAllergy from "./AddAllergy.component";

// Test: Checks that AddAllergy renders
it("checkAttendanceRender", () => {
  const { queryByTestId } = render(
    <Router>
      <AddAllergy />
    </Router>
  );
  const component = queryByTestId("addAllergy");
  expect(component).toBeTruthy();
});
