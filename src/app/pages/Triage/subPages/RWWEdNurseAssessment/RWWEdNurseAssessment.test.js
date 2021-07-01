// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: Themes
import { darkTheme } from "../../../../../app/themes/darkTheme";

// Import: SubPage
import RWWEdNurseAssessment from "./RWWEdNurseAssessment.component";

// Test: Checks that RWWEdNurseAssessment renders
it("Does the RWWEdNurseAssessment subPage render?", () => {
  const { queryByTestId } = render(
    <Router>
      <ThemeProvider theme={darkTheme}>
        <RWWEdNurseAssessment />
      </ThemeProvider>
    </Router>
  );
  const subPage = queryByTestId("rwwEdNurseAssessment");
  expect(subPage).toBeTruthy();
});
