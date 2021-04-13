// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: SubPage
import Procedures from "./Procedures.component";

// Test: Checks that Complications renders
it("checkProceduresRender", () => {
  const { queryByTestId } = render(
    <Router>
      <Procedures />
    </Router>
  );
  const page = queryByTestId("procedures");
  expect(page).toBeTruthy();
});
