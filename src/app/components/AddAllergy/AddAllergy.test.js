// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: Themes
import { darkTheme } from "../../themes/darkTheme";

// Import: Component
import AddAllergy from "./AddAllergy.component";

// Test: Checks that AddAllergy renders
it("Does the AddAllergies component render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={darkTheme}>
          <AddAllergy />
        </ThemeProvider>
      </Router>
    </Provider>
  );
  const component = queryByTestId("addAllergy");
  expect(component).toBeTruthy();
});
