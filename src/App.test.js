// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router } from "react-router-dom";

// Import: App
import App from "./App";

// Test: Checks that App renders
it("Does the App component render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
  const component = queryByTestId("app");
  expect(component).toBeTruthy();
});
