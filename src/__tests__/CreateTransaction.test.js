import { shallow } from "enzyme/build";
import TransactionForm from "../TransactionForm";
import CreateTransaction from "../CreateTransaction";
import React from "react";

describe("CreateTransaction", () => {
  describe("#render", () => {
    it("should render without crashing", () => {
      shallow(<CreateTransaction/>);
    });

    it("should render credit button", () => {
      const createTransaction = shallow(<CreateTransaction/>);
      const credit = createTransaction.find("#credit");

      expect(credit).toHaveLength(1);
    });

    it("should render a transaction form on click of credit", () => {
      const createTransaction = shallow(<CreateTransaction/>);
      createTransaction.find("#credit").simulate("click");
      const transactionForm = createTransaction.find(TransactionForm);

      expect(transactionForm).toHaveLength(1);
    });
  });
});
