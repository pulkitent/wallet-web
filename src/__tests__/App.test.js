import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { shallow } from "enzyme";
import Wallet from "../Wallet";
import { ToggleableTransaction } from "../ToggleableTransaction";

describe("", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe("Wallet", () => {
    it("Wallet should be present", () => {
      const app = shallow(<App/>);

      expect(app.find(Wallet)).toHaveLength(1);
    });
  });

  describe("ToggleableTransaction", () => {
    it("ToggleableTransaction should be present", () => {
      const app = shallow(<App/>);

      expect(app.find(ToggleableTransaction)).toHaveLength(1);
    });
  });
});
