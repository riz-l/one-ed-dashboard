// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: Themes
import { darkTheme } from "../../../../../app/themes/darkTheme";

// Import: SubPage
import SeenSubPage from "./SeenSubPage.component";

// Test: Checks that SeenSubPage renders
it("Does the SeenSubPage subPage render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={darkTheme}>
          <SeenSubPage />
        </ThemeProvider>
      </Router>
    </Provider>
  );
  const subPage = queryByTestId("seenSubPage");
  expect(subPage).toBeTruthy();
});
