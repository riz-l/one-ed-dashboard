// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: Themes
import { darkTheme } from "../../../app/themes/darkTheme";

// Import: Page
import Triage from "./Triage.component";

// Test: Checks that Triage renders
it("Does the Triage page render??", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={darkTheme}>
          <Triage />
        </ThemeProvider>
      </Router>
    </Provider>
  );
  const page = queryByTestId("triage");
  expect(page).toBeTruthy();
});
