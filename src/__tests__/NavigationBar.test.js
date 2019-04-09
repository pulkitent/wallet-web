import React from "react";
import ReactDOM from "react-dom";
import { NavigationBar } from "../NavigationBar";
import { shallow } from "enzyme";
import { Link } from "react-router-dom";

describe("NavigationBar", () => {
  describe("#render", () => {
    it("renders without crashing", () => {
      const div = shallow(<div />);
      ReactDOM.render(<NavigationBar />, div);
    });
  });

  describe("#Link", () => {
    it("should render link for Home", () => {
      const homeLink = shallow(<NavigationBar />)
        .find(Link)
        .get(0);

      expect(homeLink.text()).toBe("Home");
    });
  });
});
