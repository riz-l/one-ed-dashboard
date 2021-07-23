// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: Themes
import { darkTheme } from "../../themes/darkTheme";

// Import: Component
import Attendance from "./Attendance.component";

// Test: Checks that Attendance renders
it("Does the Attendance component render?", () => {
  const { queryByTestId } = render(
    <Router>
      <ThemeProvider theme={darkTheme}>
        <Attendance />
      </ThemeProvider>
    </Router>
  );
  const component = queryByTestId("attendance");
  expect(component).toBeTruthy();
});
