// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Component, Page
import ProtectedRoute from "./ProtectedRoute.component";
import { Dashboard } from "../../pages";

// Test: Checks that ProtectedRoute renders
it("checkProtectedRouteRender", () => {
  const { queryByTestId } = render(
    <Router>
      <ProtectedRoute
        exact
        path="/one-ed/ward/dashboard"
        component={Dashboard}
      />
    </Router>
  );
  const component = queryByTestId("protectedRoute");
  expect(component).toBeTruthy();
});
