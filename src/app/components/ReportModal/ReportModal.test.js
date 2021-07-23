// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: Themes
import { darkTheme } from "../../themes/darkTheme";

// Import: Component
import ReportModal from "./ReportModal.component";

// Test: Checks that ReportModal renders
it("Does the ReportModal component render?", () => {
  const { queryByTestId } = render(
    <Router>
      <ThemeProvider theme={darkTheme}>
        <ReportModal />
      </ThemeProvider>
    </Router>
  );
  const component = queryByTestId("reportModal");
  expect(component).toBeTruthy();
});
