import TransactionsModel from "../TransactionsModel";
import axios from "axios";

jest.mock("axios");

const transactionsList = {
  data: [
    {
      id: 1,
      amount: 75,
      day: "3",
      month: "September",
      year: "2018",
      remark: "Snacks",
      transactionType: "DEBIT"
    },
    {
      id: 2,
      amount: 3000,
      day: "7",
      month: "September",
      year: "2018",
      remarks: "Petrol",
      transactionType: "DEBIT"
    }
  ]
};

describe("TransactionsModel", () => {
  it("should able to call transaction api", async () => {
    axios.get.mockResolvedValue(transactionsList);
    await TransactionsModel.fetch();

    const transactionEndpoint = "basePath" + "/wallets/1/transactions";
    expect(axios.get).toHaveBeenCalledWith(transactionEndpoint);
  });

  it("should able get transaction list", async () => {
    axios.get.mockResolvedValue(transactionsList);

    const model = await TransactionsModel.fetch();

    expect(model).toHaveLength(2);
  });
});
