import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { shallow } from "enzyme";
import Wallet from "../Wallet";
import Dashboard from "../Dashboard";

describe("", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe("Wallet", () => {
    it("Wallet should be present", () => {
      const app = shallow(<App />);

      expect(app.find(Dashboard)).toHaveLength(1);
    });
  });
});
