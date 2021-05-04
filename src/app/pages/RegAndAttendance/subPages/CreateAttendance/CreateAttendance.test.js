// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: SubPage
import CreateAttendance from "./CreateAttendance.component";

// Test: Checks that CreateAttendance renders
it("checkCreateAttendanceRender", () => {
  const { queryByTestId } = render(
    <Router>
      <CreateAttendance />
    </Router>
  );
  const page = queryByTestId("createAttendance");
  expect(page).toBeTruthy();
});
