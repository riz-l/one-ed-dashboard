// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";

// Import: SubPage
import CreateAttendance from "./CreateAttendance.component";

// Test: Checks that CreateAttendance renders
it("Does the CreateAttendance SubPage render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <CreateAttendance />
      </Router>
    </Provider>
  );
  const page = queryByTestId("createAttendance");
  expect(page).toBeTruthy();
});
