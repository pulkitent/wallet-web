import React from "react";
import { shallow } from "enzyme";
import Wallet from "../Wallet";
import WalletModel from "../WalletModel";

beforeAll(() => {
  WalletModel.fetch = jest.fn(() => Promise.resolve(new WalletModel({})));
});

describe("Wallet", () => {
  it("should not crash on rendering", () => {
    shallow(<Wallet/>);
  });

  it("should render balance header along with amount ", () => {
    const wallet = shallow(<Wallet/>);
    const balanceHeader = wallet.find("#balance");
    const balanceAmount = wallet.find("#balanceAmount");

    expect(balanceHeader).toHaveLength(1);
    expect(balanceAmount).toHaveLength(1);
  });

  it("should display balance 2000", async () => {
    WalletModel.fetch.mockResolvedValue(new WalletModel({ "balance": 2000 }));

    const wallet = shallow(<Wallet/>);
    await Promise.resolve();
    const balance = wallet.find("#balanceAmount");

    expect(balance.text()).toContain(2000);
  });

  it("should have a low message alert with wallet balance 10 INR", async () => {
    WalletModel.fetch.mockResolvedValue(new WalletModel({ "balance": 10 }));

    const wallet = shallow(<Wallet/>);
    await Promise.resolve();
    const balance = wallet.find("h5");

    expect(balance.text()).toContain("Low Balance");
  });
});
