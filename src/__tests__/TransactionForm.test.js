import React from "react";
import { shallow } from "enzyme";
import { TransactionForm } from "../TransactionForm";

const TransactionModelMock = jest.fn();

describe("TransactionForm", () => {
  describe("#render", () => {
    it("should render without crashing", () => {
      shallow(<TransactionForm />);
    });

    it("should render amount field", () => {
      const transactionForm = shallow(<TransactionForm />);
      const amount = transactionForm.find("#amount");

      expect(amount.type()).toEqual("input");
    });

    it("should render remark field", () => {
      const transactionForm = shallow(<TransactionForm />);
      const remark = transactionForm.find("#remark");

      expect(remark.type()).toEqual("input");
    });

    it("should render proceed button", () => {
      const transactionForm = shallow(<TransactionForm />);
      const proceed = transactionForm.find("#proceed");

      expect(proceed.type().displayName).toEqual("Button");
      expect(proceed.props().type).toEqual("submit");
    });
  });

  describe("#change", () => {
    it("should change amount value", () => {
      const transactionForm = shallow(<TransactionForm />);
      const amount = transactionForm.find("#amount");

      amount.simulate("change", { target: { value: "10" } });

      expect(transactionForm.find("#amount").props().value).toEqual("10");
    });

    it("should change remark value", () => {
      const transactionForm = shallow(<TransactionForm />);
      const remark = transactionForm.find("#remark");

      remark.simulate("change", { target: { value: "Snacks" } });

      expect(transactionForm.find("#remark").props().value).toEqual("Snacks");
    });
  });

  describe("#submit", () => {
    it("should inform parent when transaction is saved successfully", async () => {
      const handleTransaction = jest.fn();
      const event = { preventDefault: jest.fn() };
      const saveFn = jest.fn().mockResolvedValue(Promise.resolve({}));
      const transactionForm = shallow(
        <TransactionForm onSuccess={handleTransaction} />
      );
      transactionForm.state().transaction.save = saveFn;

      transactionForm.find("#proceed").simulate("click", event);

      await Promise.resolve();
      expect(handleTransaction).toHaveBeenCalled();
    });

    it("should display success message on successful transaction", async () => {
      const handleTransaction = jest.fn();
      const event = { preventDefault: jest.fn() };
      const saveFn = jest.fn().mockResolvedValue(Promise.resolve({}));
      const transactionForm = shallow(
        <TransactionForm onSuccess={handleTransaction} />
      );
      transactionForm.state().transaction.save = saveFn;

      transactionForm.find("#proceed").simulate("click", event);

      await Promise.resolve();
      expect(transactionForm.find("#message").text()).toBe(
        "Transaction successful"
      );
    });

    // TODO : Remove prevent default
    it("should not display success message on failed transaction", async () => {
      const handleTransaction = jest.fn();
      const event = { preventDefault: jest.fn() };
      const saveFn = jest.fn().mockResolvedValue(Promise.reject({}));
      const transactionForm = shallow(
        <TransactionForm onSuccess={handleTransaction} />
      );
      transactionForm.state().transaction.save = saveFn;

      transactionForm.find("#proceed").simulate("click", event);

      await Promise.resolve();
      expect(transactionForm.find("#message").text()).toBe("");
    });
  });
});
