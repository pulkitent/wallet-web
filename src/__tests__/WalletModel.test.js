import axios from "axios";
import WalletModel from "../WalletModel";

jest.mock("axios");

describe("WalletModel", () => {
  it("should fetch the wallet", async () => {
    axios.get.mockResolvedValue({ data: { "id": 1, "name": "Walter White", "balance": 27500 } });

    const wallet = await WalletModel.fetch(1);

    expect(wallet.balance).toEqual(27500);
  });

  it("should fetch the wallet", async () => {
    axios.get.mockResolvedValue({ data: { "id": 2, "name": "Paytm", "balance": 2000 } });

    const wallet = await WalletModel.fetch(2);

    expect(wallet.balance).toEqual(2000);
  });
});