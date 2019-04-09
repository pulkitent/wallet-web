import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { shallow } from "enzyme";
import { NavigationBar } from "../NavigationBar";
import { Route } from "react-router-dom";
import Dashboard from "../Dashboard";
import FilterableTransactionsTable from "../FilterableTransactionsTable";

describe("App", () => {
  describe("#render", () => {
    it("renders without crashing", () => {
      const div = document.createElement("div");
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
  });

  describe("NavigationBar", () => {
    it("Navigation bar should be present", () => {
      const app = shallow(<App />);

      expect(app.find(NavigationBar)).toHaveLength(1);
    });
  });

  describe("Menu", () => {
    it("should route to Dashboard on /", () => {
      const app = shallow(<App />);
      const dashboardRoute = app.find(Route).get(0);

      expect(dashboardRoute.props.path).toBe("/");
      expect(dashboardRoute.props.component).toEqual(Dashboard);
    });

    it("should route to Transactions on /transactions", () => {
      const app = shallow(<App />);
      const dashboardRoute = app.find(Route).get(1);

      expect(dashboardRoute.props.path).toBe("/transactions");
      expect(dashboardRoute.props.component).toEqual(FilterableTransactionsTable);
    });
  });
});
