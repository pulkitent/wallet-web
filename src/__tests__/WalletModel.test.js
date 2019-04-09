import axios from "axios";
import WalletModel from "../WalletModel";

jest.mock("axios");

describe("WalletModel", () => {
  it("should fetchAll the wallet", async () => {
    axios.get.mockResolvedValue({
      data: { id: 1, name: "Walter White", balance: 27500 }
    });

    const wallet = await WalletModel.fetch(1);

    expect(wallet.balance).toEqual(27500);
  });

  it("should fetchAll the wallet", async () => {
    axios.get.mockResolvedValue({
      data: { id: 2, name: "Paytm", balance: 2000 }
    });

    const wallet = await WalletModel.fetch(2);

    expect(wallet.balance).toEqual(2000);
  });

  it("If balance is less than 10 should return true", async () => {
    const walletModel = new WalletModel({ balance: 9 });

    expect(walletModel.isBalanceLow()).toBeTruthy();
  });
});
