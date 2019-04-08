import React from "react";
import { shallow } from "enzyme";
import Dashboard from "../Dashboard";
import Wallet from "../Wallet";
import { ToggleableTransaction } from "../ToggleableTransaction";
import { TransactionsTable } from "../TransactionsTable";
import { TransactionModel } from "../TransactionModel";

describe("Dashboard", () => {
  it("should render dashboard without crashing", () => {
    shallow(<Dashboard />);
  });

  it("should render wallet", () => {
    const dashBoard = shallow(<Dashboard />);

    expect(dashBoard.find(Wallet)).toHaveLength(1);
  });

  it("should render toggleable transactions", () => {
    const dashBoard = shallow(<Dashboard />);

    expect(dashBoard.find(ToggleableTransaction)).toHaveLength(1);
  });

  it("should render transaction table", () => {
    const dashBoard = shallow(<Dashboard />);

    expect(dashBoard.find(TransactionsTable)).toHaveLength(1);
  });

  describe("#componentDidMount", () => {
    it("should fetch transactions", async () => {
      TransactionModel.fetch = jest
        .fn()
        .mockResolvedValue(Promise.resolve(transactions));

      const dashBoard = shallow(<Dashboard />);
      await Promise.resolve();
      await Promise.resolve();

      expect(
        dashBoard.find(TransactionsTable).props().transactions
      ).toHaveLength(2);
    });
  });
});

const transactions = [
  new TransactionModel(1, "DEBIT", 75, "Snacks"),
  new TransactionModel(1, "CREDIT", 175, "Pen")
];
