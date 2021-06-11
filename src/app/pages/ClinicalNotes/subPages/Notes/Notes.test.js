// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";

// Import: SubPage
import Notes from "./Notes.component";

// Test: Checks that Notes renders
it("Does the Notes subPage render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <Notes />
      </Router>
    </Provider>
  );
  const subPage = queryByTestId("notes");
  expect(subPage).toBeTruthy();
});
