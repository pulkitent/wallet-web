import React from "react";
import { shallow } from "enzyme";
import Wallet from "../Wallet";
import WalletModel from "../WalletModel";
import LowBalanceMessage from "../LowBalanceMessage";

beforeAll(() => {
  WalletModel.fetch = jest.fn(() => Promise.resolve(new WalletModel({})));
});

describe("Wallet", () => {
  it("should not crash on rendering", () => {
    shallow(<Wallet/>);
  });

  it("should have balance tag", () => {
    const wallet = shallow(<Wallet/>);
    const balance = wallet.find("#balance");

    expect(balance).toHaveLength(1);
  });

  it("should have balance amount tag", () => {
    const wallet = shallow(<Wallet/>);
    const balance = wallet.find("#balanceAmount");

    expect(balance).toHaveLength(1);
  });

  it("should have balance 2000", async () => {
    WalletModel.fetch.mockResolvedValue(new WalletModel({'balance': 2000 }));

    const wallet = shallow(<Wallet/>);
    await Promise.resolve();
    const balance = wallet.find("#balanceAmount");

    expect(balance.text()).toContain(2000);
  });

  it("should render LowBalanceMessage component", async () => {
    const wallet = shallow(<Wallet/>);
    const lowBalance = wallet.find(LowBalanceMessage);

    expect(lowBalance).toHaveLength(1);
  });

  it("should have a low message alert with wallet balance 10 INR", async () => {
    WalletModel.fetch.mockResolvedValue(new WalletModel({'balance': 10 }));

    const wallet = shallow(<Wallet/>);
    await Promise.resolve();
    const balance = wallet.find("h5");

    expect(balance.text()).toContain("Low Balance");
  });
});
