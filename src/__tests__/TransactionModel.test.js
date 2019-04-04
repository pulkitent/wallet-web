import axios from "axios";
import TransactionModel from "../TransactionModel";

jest.mock("axios");

const transactionResponse = {
  "id": 0,
  "amount": 10,
  "remark": "Snacks",
  "type": "CREDIT"
};

describe("TransactionModel", () => {
  describe("#create", () => {
    it("should add new transaction given type, amount, remark", async () => {
      axios.post.mockResolvedValue(Promise.resolve(transactionResponse));
      const transactionModel = getTransaction();

      await transactionModel.save();

      await Promise.resolve();
      expect(axios.post).toHaveBeenCalled();
    });

    //TODO: Add test case for save failure
    //TODO: Add test case for endpoint
  });
});

const getTransaction = function() {
  return new TransactionModel("CREDIT", 10, "Snacks");
};
