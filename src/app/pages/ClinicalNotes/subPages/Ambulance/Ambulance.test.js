// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: Themes
import { darkTheme } from "../../../../../app/themes/darkTheme";

// Import: SubPage
import Ambulance from "./Ambulance.component";

// Test: Checks that Ambulance renders
it("Does the Ambulance subPage render?", () => {
  const { queryByTestId } = render(
    <Router>
      <ThemeProvider theme={darkTheme}>
        <Ambulance />
      </ThemeProvider>
    </Router>
  );
  const subPage = queryByTestId("ambulance");
  expect(subPage).toBeTruthy();
});
