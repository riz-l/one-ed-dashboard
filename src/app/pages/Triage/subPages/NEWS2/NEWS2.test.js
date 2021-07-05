// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: Themes
import { darkTheme } from "../../../../../app/themes/darkTheme";

// Import: SubPage
import NEWS2 from "./NEWS2.component";

// Test: Checks that NEWS2 renders
it("Does the NEWS2 subPage render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={darkTheme}>
          <NEWS2 />
        </ThemeProvider>
      </Router>
    </Provider>
  );
  const subPage = queryByTestId("news2");
  expect(subPage).toBeTruthy();
});
