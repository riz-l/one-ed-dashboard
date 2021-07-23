// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: Themes
import { darkTheme } from "../../../app/themes/darkTheme";

// Import: Page
import Seen from "./Seen.component";

// Test: Checks that Seen renders
it("Does the Seen page render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={darkTheme}>
          <Seen />
        </ThemeProvider>
      </Router>
    </Provider>
  );
  const page = queryByTestId("seen");
  expect(page).toBeTruthy();
});
