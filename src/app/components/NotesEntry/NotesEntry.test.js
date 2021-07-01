// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: Themes
import { darkTheme } from "../../themes/darkTheme";

// Import: Component
import NotesEntry from "./NotesEntry.component";

// Test: Checks that NotesEntry renders
it("Does the NotesEntry component render?", () => {
  const { queryByTestId } = render(
    <Router>
      <ThemeProvider theme={darkTheme}>
        <NotesEntry />
      </ThemeProvider>
    </Router>
  );
  const component = queryByTestId("notesEntry");
  expect(component).toBeTruthy();
});
