import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { shallow } from "enzyme";
import { NavigationBar } from "../NavigationBar";

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
});
