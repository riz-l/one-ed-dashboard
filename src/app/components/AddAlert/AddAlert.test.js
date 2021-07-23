// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: Themes
import { darkTheme } from "../../themes/darkTheme";

// Import: Component
import AddAlert from "./AddAlert.component";

// Test: Checks that AddAlert renders
it("Does the AddAlert component render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={darkTheme}>
          <AddAlert />
        </ThemeProvider>
      </Router>
    </Provider>
  );
  const component = queryByTestId("addAlert");
  expect(component).toBeTruthy();
});
