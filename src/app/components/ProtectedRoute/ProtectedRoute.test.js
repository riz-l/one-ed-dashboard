// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Component, Page
import ProtectedRoute from "./ProtectedRoute.component";
import { Dashboard } from "../../pages";

// Test: Checks that ProtectedRoute renders
it("Does the ProtectedRoute component render?", () => {
  const { queryByTestId } = render(
    <Router>
      <ProtectedRoute
        component={Dashboard}
        exact
        path="/one-ed/ward/dashboard"
      />
    </Router>
  );
  const component = queryByTestId("protectedRoute");
  expect(component).toBeTruthy();
});
