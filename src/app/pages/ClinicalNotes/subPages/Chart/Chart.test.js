// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: Themes
import { darkTheme } from "../../../../themes/darkTheme";

// Import: SubPage
import Chart from "./Chart.component";

// Test: Checks that Chart renders
it("Does the Chart subPage render?", () => {
  const { queryByTestId } = render(
    <Router>
      <ThemeProvider theme={darkTheme}>
        <Chart />
      </ThemeProvider>
    </Router>
  );
  const subPage = queryByTestId("chart");
  expect(subPage).toBeTruthy();
});
