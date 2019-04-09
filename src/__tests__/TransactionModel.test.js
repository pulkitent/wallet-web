import axios from "axios";
import { TransactionModel } from "../TransactionModel";
import React from "react";

jest.mock("axios");

describe("TransactionModel", () => {
  describe("#save", () => {
    it("should be able to call the endpoint on save", () => {
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

    // TODO : Use enzyme promise test
    it("should be able add new transaction given id, type, amount, remark", async () => {
      axios.post.mockResolvedValue(
        new Promise(resolve => resolve(transaction))
      );
      const model = transactionModel();

      const savedTransaction = await model.save();
      await Promise.resolve();
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
    it("should be able to call transaction api", async () => {
      axios.get.mockResolvedValue(Promise.resolve(response));
      const walletId = 1;
      const transactionEndpoint = "basePath" + "/wallets/1/transactions";

      await TransactionModel.fetch(walletId);

      await Promise.resolve();
      expect(axios.get).toHaveBeenCalledWith(transactionEndpoint, {
        params: { limit: "" }
      });
    });

    it("should be able to get transactions", async () => {
      axios.get.mockResolvedValue(Promise.resolve(response));
      const walletId = 1;
      const model = await TransactionModel.fetch(walletId);

      await Promise.resolve();
      expect(model).toHaveLength(2);
    });

    it("should be able to get transactions with limit 2", async () => {
      axios.get.mockResolvedValue(Promise.resolve(response));
      const walletId = 1;
      const limit = 2;
      const transactionEndpoint = "basePath" + "/wallets/1/transactions";

      const model = await TransactionModel.fetch(walletId, limit);
      await Promise.resolve();
      await Promise.resolve();

      expect(axios.get).toHaveBeenCalledWith(transactionEndpoint, {
        params: { limit: "" }
      });
    });

    it("should be able to get all transactions for given wallet Id", async () => {
      axios.get.mockResolvedValue(Promise.resolve(response));
      const transactions = await TransactionModel.fetchAll({ walletId: 1 });

      await Promise.resolve();
      expect(transactions).toHaveLength(2);
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
