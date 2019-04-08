import axios from "axios";
import { TransactionModel } from "../TransactionModel";
import * as React from "react";

jest.mock("axios");

describe("TransactionModel", () => {
  describe("#save", () => {
    it("should call the endpoint on save", () => {
      const model = transactionModel();
      const endpointUrl =
        "basePath/wallets/" + model.walletId + "/transactions";
      const data = {
        type: model.type,
        remark: model.remark,
        amount: model.amount
      };

      model.save();

      expect(axios.post).toHaveBeenCalledWith(endpointUrl, data);
    });

    it("should add new transaction given id, type, amount, remark", async () => {
      axios.post.mockResolvedValue(
        new Promise(resolve => resolve(transaction))
      );
      const model = transactionModel();
      let savedTransaction = {};

      await model.save().then(response => (savedTransaction = response));

      await Promise.resolve();
      expect(savedTransaction).toEqual(transaction);
    });
  });

  describe("#amount", () => {
    it("should update the amount of transaction", () => {
      const model = transactionModel();

      model.amount = 110;

      expect(model.amount).toBe(110);
    });
  });

  describe("#fetch", () => {
    it("should able to call transaction api", async () => {
      axios.get.mockResolvedValue(Promise.resolve(response));
      const walletId = 1;
      const transactionEndpoint = "basePath" + "/wallets/1/transactions";

      await TransactionModel.fetch(walletId);

      await Promise.resolve();
      expect(axios.get).toHaveBeenCalledWith(transactionEndpoint);
    });

    it("should able get transaction list", async () => {
      axios.get.mockResolvedValue(Promise.resolve(response));
      const walletId = 1;

      const model = await TransactionModel.fetch(walletId);

      await Promise.resolve();
      expect(model).toHaveLength(2);
    });
  });
});

const transactionModel = function() {
  return new TransactionModel(transaction);
};

const transaction = {
  id: 1,
  walletId: 1,
  amount: 10,
  remark: "Snacks",
  type: "CREDIT"
};

const transactions = [
  new TransactionModel(1, "DEBIT", 75, "Snacks"),
  new TransactionModel(1, "CREDIT", 175, "Pen")
];

const response = { data: transactions };
