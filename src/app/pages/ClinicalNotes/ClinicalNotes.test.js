// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: Themes
import { darkTheme } from "../../../app/themes/darkTheme";

// Import: Page
import ClinicalNotes from "./ClinicalNotes.component";

// Test: Checks that ClinicalNotes renders
it("Does the ClinicalNotes page render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={darkTheme}>
          <ClinicalNotes />
        </ThemeProvider>
      </Router>
    </Provider>
  );
  const page = queryByTestId("clinicalNotes");
  expect(page).toBeTruthy();
});
