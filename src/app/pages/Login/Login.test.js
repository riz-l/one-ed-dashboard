// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Page
import Login from "./Login.component";

// Test: Checks that Login renders
it("checkLoginRender", () => {
  const { queryByTestId } = render(
    <Router>
      <Login />
    </Router>
  );
  const page = queryByTestId("login");
  expect(page).toBeTruthy();
});
