// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: SubPage
import Chart from "./Chart.component";

// Test: Checks that Chart renders
it("checkChartRender", () => {
  const { queryByTestId } = render(
    <Router>
      <Chart />
    </Router>
  );
  const page = queryByTestId("chart");
  expect(page).toBeTruthy();
});
