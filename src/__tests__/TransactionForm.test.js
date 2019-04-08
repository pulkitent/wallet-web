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
    it("should display success message on successful transaction", async () => {
      const handleTransaction = jest.fn();
      const saveFn = jest.fn().mockResolvedValue(Promise.resolve({}));
      const transactionForm = shallow(
        <TransactionForm onSuccess={handleTransaction} />
      );
      const amount = transactionForm.find("#amount");
      const remark = transactionForm.find("#remark");
      amount.simulate("change", { target: { value: "10000" } });
      remark.simulate("change", { target: { value: "Snack" } });
      transactionForm.state().transaction.save = saveFn;

      transactionForm.find("#proceed").simulate("click");

      await Promise.resolve();
      expect(transactionForm.find("#message").text()).toBe(
        "Transaction successful"
      );
    });

    it("should not display success message on failed transaction", async () => {
      const handleTransaction = jest.fn();
      const saveFn = jest.fn().mockResolvedValue(Promise.reject({}));
      const transactionForm = shallow(
        <TransactionForm onSuccess={handleTransaction} />
      );
      transactionForm.state().transaction.save = saveFn;

      transactionForm.find("#proceed").simulate("click");

      await Promise.resolve();
      expect(transactionForm.find("#message").text()).toBe("");
    });
  });

  describe("validate", () => {
    it("should not allow an amount 12345 to be entered", () => {
      const transactionForm = shallow(<TransactionForm />);
      const proceedButton = transactionForm.find("#proceed");
      const amount = transactionForm.find("#amount");
      amount.simulate("change", { target: { value: "12345" } });

      proceedButton.simulate("click");

      expect(transactionForm.find("#amountError").props().children).toEqual(
        "Amount should be between 1-10k"
      );
    });

    it("should not allow an amount 12345 to be entered", () => {
      const transactionForm = shallow(<TransactionForm />);
      const proceedButton = transactionForm.find("#proceed");
      const amount = transactionForm.find("#amount");
      amount.simulate("change", { target: { value: "12345" } });

      proceedButton.simulate("click");

      expect(transactionForm.find("#amountError").props().children).toEqual(
        "Amount should be between 1-10k"
      );
    });

    it("should not allow an amount -1 to be entered", () => {
      const transactionForm = shallow(<TransactionForm />);
      const proceedButton = transactionForm.find("#proceed");
      const amount = transactionForm.find("#amount");
      amount.simulate("change", { target: { value: "-1" } });

      proceedButton.simulate("click");

      expect(transactionForm.find("#amountError").props().children).toEqual(
        "Amount should be between 1-10k"
      );
    });

    it("should not allow an amount 10000 to be entered", () => {
      const transactionForm = shallow(<TransactionForm />);
      const proceedButton = transactionForm.find("#proceed");
      const amount = transactionForm.find("#amount");
      amount.simulate("change", { target: { value: "10000" } });

      proceedButton.simulate("click");

      expect(
        transactionForm.find("#amountError").props().children
      ).toBeUndefined();
    });

    it("should not allow a remark with more than 50 characters to be entered", () => {
      const transactionForm = shallow(<TransactionForm />);
      const proceedButton = transactionForm.find("#proceed");
      const remark = transactionForm.find("#remark");

      const fiftyCharacterRemark =
        "qazwsxedcrfvtgbyhnujmiklopqazwsxedcrfvtgbyhnujmkilop";
      remark.simulate("change", { target: { value: fiftyCharacterRemark } });

      proceedButton.simulate("click");

      expect(transactionForm.find("#remarkError").props().children).toEqual(
        "Only 50 characters allowed"
      );
    });
  });
});
