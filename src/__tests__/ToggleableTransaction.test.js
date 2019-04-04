import { shallow } from "enzyme/build";
import TransactionForm from "../TransactionForm";
import { ToggleableTransaction } from "../ToggleableTransaction";
import React from "react";

describe("ToggleableTransaction", () => {
  describe("#render", () => {
    it("should render without crashing", () => {
      shallow(<ToggleableTransaction/>);
    });

    it("should render credit button", () => {
      const createTransaction = shallow(<ToggleableTransaction/>);
      const credit = createTransaction.find("#credit");

      expect(credit).toHaveLength(1);
    });

    it("should render a transaction form on click of credit", () => {
      const createTransaction = shallow(<ToggleableTransaction onSuccess={jest.fn()}/>);
      createTransaction.find("#credit").simulate("click");
      const transactionForm = createTransaction.find(TransactionForm);

      expect(transactionForm).toHaveLength(1);
    });
  });
});
