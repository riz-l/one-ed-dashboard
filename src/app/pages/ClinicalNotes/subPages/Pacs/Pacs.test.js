// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: Themes
import { darkTheme } from "../../../../../app/themes/darkTheme";

// Import: SubPage
import Pacs from "./Pacs.component";

// Test: Checks that Pacs renders
it("Does the Pacs subPage render?", () => {
  const { queryByTestId } = render(
    <Router>
      <ThemeProvider theme={darkTheme}>
        <Pacs />
      </ThemeProvider>
    </Router>
  );
  const subPage = queryByTestId("pacs");
  expect(subPage).toBeTruthy();
});
