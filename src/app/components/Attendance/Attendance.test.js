// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Component
import Attendance from "./Attendance.component";

// Test: Checks that Attendance renders
it("checkAttendanceRender", () => {
  const { queryByTestId } = render(
    <Router>
      <Attendance />
    </Router>
  );
  const component = queryByTestId("attendance");
  expect(component).toBeTruthy();
});
