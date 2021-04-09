// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Dexie from "dexie";

// Import: SubPage
import Details from "./Details.component";

// Dexie: database = ODetails
const detailsDb = new Dexie("ODetails");

// Test: Checks that Details renders
it("checkDetailsRender", () => {
  const { queryByTestId } = render(
    <Router>
      <Details db={detailsDb} />
    </Router>
  );
  const page = queryByTestId("details");
  expect(page).toBeTruthy();
});
