// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Component
import NotesEntry from "./NotesEntry.component";

// Test: Checks that NotesEntry renders
it("Does the NotesEntry component render?", () => {
  const { queryByTestId } = render(
    <Router>
      <NotesEntry />
    </Router>
  );
  const component = queryByTestId("notesEntry");
  expect(component).toBeTruthy();
});
