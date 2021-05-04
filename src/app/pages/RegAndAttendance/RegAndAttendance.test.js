// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Page
import RegAndAttendance from "./RegAndAttendance.component";

// Test: Checks that RegAndAttendance renders
it("checkRegAndAttendanceRender", () => {
  const { queryByTestId } = render(
    <Router>
      <RegAndAttendance />
    </Router>
  );
  const page = queryByTestId("regAndAttendance");
  expect(page).toBeTruthy();
});
