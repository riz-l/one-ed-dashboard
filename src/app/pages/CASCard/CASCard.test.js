// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Page
import CASCard from "./CASCard.component";

// Test: Checks that CASCard renders
it("Does the CASCard page render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <CASCard />
      </Router>
    </Provider>
  );
  const page = queryByTestId("casCard");
  expect(page).toBeTruthy();
});
