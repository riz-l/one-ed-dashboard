// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: Themes
import { darkTheme } from "../../themes/darkTheme";

// Import: Component
import ReportSection from "./ReportSection.component";

// Test: Checks that ReportSection renders
it("Does the ReportSection component render?", () => {
  const { queryByTestId } = render(
    <Router>
      <ThemeProvider theme={darkTheme}>
        <ReportSection />
      </ThemeProvider>
    </Router>
  );
  const component = queryByTestId("reportSection");
  expect(component).toBeTruthy();
});
