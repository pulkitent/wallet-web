import React from "react";
import { shallow } from "enzyme";
import TransactionForm from "../TransactionForm";

describe("TransactionForm", () => {
  describe("#render", () => {
    it("should render without crashing", () => {
      shallow(<TransactionForm/>);
    });

    it("should render form", () => {
      const transactionForm = shallow(<TransactionForm/>);
      const form = transactionForm.find("form");

      expect(form).toHaveLength(1);
    });

    it("should render amount field", () => {
      const transactionForm = shallow(<TransactionForm/>);
      const amount = transactionForm.find("#amount");

      expect(amount.type()).toEqual("input");
    });

    it("should render remark field", () => {
      const transactionForm = shallow(<TransactionForm/>);
      const remark = transactionForm.find("#remark");

      expect(remark.type()).toEqual("input");
    });

    it("should render proceed button", () => {
      const transactionForm = shallow(<TransactionForm/>);
      const proceed = transactionForm.find("#proceed");

      expect(proceed.type()).toEqual("input");
      expect(proceed.props().type).toEqual("submit");
    });
  });

  describe("#change", () => {
    it("should change amount value", () => {
      const transactionForm = shallow(<TransactionForm/>);
      const amount = transactionForm.find("#amount");

      amount.simulate("change", { target: { value: "10" } });

      expect(transactionForm.find("#amount").props().value).toEqual("10");
    });

    it("should change remark value", () => {
      const transactionForm = shallow(<TransactionForm/>);
      const remark = transactionForm.find("#remark");

      remark.simulate("change", { target: { value: "Snacks" } });

      expect(transactionForm.find("#remark").props().value).toEqual("Snacks");
    });
  });

  describe("#submit", () => {
    it("should create the transaction when given amount and remark", () => {
      const transactionForm = shallow(<TransactionForm/>);
      const amount = transactionForm.find("#amount");
      const remark = transactionForm.find("#remark");
      const proceed = transactionForm.find("#proceed");

      amount.simulate("change", { target: { value: "10" } });
      remark.simulate("change", { target: { value: "Snacks" } });
      proceed.simulate("submit",{});


    });
  });
});
