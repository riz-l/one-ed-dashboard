// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: Themes
import { darkTheme } from "../../../../../app/themes/darkTheme";

// Import: SubPage
import Complications from "./Complications.component";

// Test: Checks that Complications renders
it("Does the Complications subPage render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={darkTheme}>
          <Complications />
        </ThemeProvider>
      </Router>
    </Provider>
  );
  const subPage = queryByTestId("complications");
  expect(subPage).toBeTruthy();
});
