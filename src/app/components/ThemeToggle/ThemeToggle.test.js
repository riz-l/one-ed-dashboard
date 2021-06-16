// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: Themes
import { darkTheme } from "../../../app/themes/darkTheme";

// Import: Component
import ThemeToggle from "./ThemeToggle.component";

// Test: Checks that ThemeToggle renders
it("Does the ThemeToggle component render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={darkTheme}>
          <ThemeToggle />
        </ThemeProvider>
      </Router>
    </Provider>
  );
  const component = queryByTestId("themeToggle");
  expect(component).toBeTruthy();
});
