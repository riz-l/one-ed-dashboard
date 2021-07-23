// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: Themes
import { darkTheme } from "../../../../../app/themes/darkTheme";

// Import: SubPage
import GPConnect from "./GPConnect.component";

// Test: Checks that GPConnect renders
it("Does the GPConnect subPage render?", () => {
  const { queryByTestId } = render(
    <Router>
      <ThemeProvider theme={darkTheme}>
        <GPConnect />
      </ThemeProvider>
    </Router>
  );
  const subPage = queryByTestId("gpConnect");
  expect(subPage).toBeTruthy();
});
