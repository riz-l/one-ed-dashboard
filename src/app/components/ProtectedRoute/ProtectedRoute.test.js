// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Component
import ProtectedRoute from "./ProtectedRoute.component";

// Test: Checks that ProtectedRoute renders
it("checkProtectedRouteRender", () => {
  const { queryByTestId } = render(
    <Router>
      <ProtectedRoute />
    </Router>
  );
  const component = queryByTestId("protectedRoute");
  expect(component).toBeTruthy();
});
