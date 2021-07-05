// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: Themes
import { darkTheme } from "../../../../../app/themes/darkTheme";

// Import: SubPage
import RWWEdClinicianAssessment from "./RWWEdClinicianAssessment.component";

// Test: Checks that RWWEdClinicianAssessment renders
it("Does the RWWEdClinicianAssessment subPage render?", () => {
  const { queryByTestId } = render(
    <Router>
      <ThemeProvider theme={darkTheme}>
        <RWWEdClinicianAssessment />
      </ThemeProvider>
    </Router>
  );
  const subPage = queryByTestId("rwwEdClinicianAssessment");
  expect(subPage).toBeTruthy();
});
