// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: Themes
import { darkTheme } from "../../../app/themes/darkTheme";

// Import: Page
import Login from "./Login.component";

// Test: Checks that Login renders
it("Does the Login page render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={darkTheme}>
          <Login />
        </ThemeProvider>
      </Router>
    </Provider>
  );
  const page = queryByTestId("login");
  expect(page).toBeTruthy();
});
