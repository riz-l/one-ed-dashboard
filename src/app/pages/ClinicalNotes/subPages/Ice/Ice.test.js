// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: Themes
import { darkTheme } from "../../../../../app/themes/darkTheme";

// Import: SubPage
import Ice from "./Ice.component";

// Test: Checks that Ice renders
it("Does the Ice subPage render?", () => {
  const { queryByTestId } = render(
    <Router>
      <ThemeProvider theme={darkTheme}>
        <Ice />
      </ThemeProvider>
    </Router>
  );
  const subPage = queryByTestId("ice");
  expect(subPage).toBeTruthy();
});
