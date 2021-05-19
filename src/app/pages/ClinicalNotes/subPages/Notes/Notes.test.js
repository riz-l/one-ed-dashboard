// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: SubPage
import Notes from "./Notes.component";

// Test: Checks that Notes renders
it("checkNotesRender", () => {
  const { queryByTestId } = render(
    <Router>
      <Notes />
    </Router>
  );
  const page = queryByTestId("notes");
  expect(page).toBeTruthy();
});
