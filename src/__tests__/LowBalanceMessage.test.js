import { shallow } from "enzyme";
import React from "react";
import LowBalanceMessage from "../LowBalanceMessage";

describe("Low Balance Message", () => {
  it("should render without crashing", () => {
    shallow(<LowBalanceMessage/>)
  });

  it("should render low message message when balance is less than or equal to 10", () => {
    const lowBalance = shallow(<LowBalanceMessage balance={9}/>);
    const message = lowBalance.find('h5');

    expect(message.text()).toBe('Low Balance');
  });
});
