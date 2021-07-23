// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: Themes
import { darkTheme } from "../../themes/darkTheme";

// Import: Components
import Header from "./Header.component";

// Test: Checks that Header renders
it("Does the Header component render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={darkTheme}>
          <Header />
        </ThemeProvider>
      </Router>
    </Provider>
  );
  const component = queryByTestId("header");
  expect(component).toBeTruthy();
});
