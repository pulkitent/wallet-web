import React from "react";
import { shallow } from "enzyme";
import Dashboard from "../Dashboard";
import Wallet from "../Wallet";
import { ToggleableTransaction } from "../ToggleableTransaction";
import { TransactionsTable } from "../TransactionsTable";

describe("Dashboard", () => {
  it("should render dashboard without crashing", () => {
    shallow(<Dashboard/>);
  });

  it("should render wallet", () => {
    const dashBoard = shallow(<Dashboard/>);

    expect(dashBoard.find(Wallet)).toHaveLength(1);
  });

  it("should render toggleable transactionModel", () => {
    const dashBoard = shallow(<Dashboard/>);

    expect(dashBoard.find(ToggleableTransaction)).toHaveLength(1);
  });

  it("should render transaction table", () => {
    const dashBoard = shallow(<Dashboard/>);

    expect(dashBoard.find(TransactionsTable)).toHaveLength(1);
  });

  it("should render fetch transactionModel", () => {
    const dashBoard = shallow(<Dashboard/>);

    expect(dashBoard.find(TransactionsTable)).toHaveLength(1);
  });

});
