// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: Themes
import { darkTheme } from "../../../app/themes/darkTheme";

// Import: Page
import Home from "./Home.component";

// Test: Checks that Home renders
it("Does the Home page render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={darkTheme}>
          <Home />
        </ThemeProvider>
      </Router>
    </Provider>
  );
  const page = queryByTestId("home");
  expect(page).toBeTruthy();
});
