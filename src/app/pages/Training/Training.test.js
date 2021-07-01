// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: Themes
import { darkTheme } from "../../../app/themes/darkTheme";

// Import: Page
import Training from "./Training.component";

// Test: Checks that Training renders
it("Does the Training page render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={darkTheme}>
          <Training />
        </ThemeProvider>
      </Router>
    </Provider>
  );
  const page = queryByTestId("training");
  expect(page).toBeTruthy();
});
