import { shallow } from "enzyme";
import React from "react";
import TransactionRow from "../TransactionRow";
import moment from "moment";

describe("TransactionRow", () => {
  it("should render without crash", () => {
    const transactionRow = shallow(<TransactionRow transaction={{}} />);

    expect(transactionRow.type()).toEqual("tr");
  });

  it("should display one transaction", () => {
    const transactionRow = shallow(<TransactionRow transaction={{}} />);
    const row = transactionRow.find("tr");

    expect(row).toHaveLength(1);
    expect(row.find("td")).toHaveLength(3);
  });

  it("should display static data", () => {
    const transactionRow = shallow(
      <TransactionRow
        key={1}
        transaction={{
          month: "September",
          amount: "75",
          type: "DEBIT",
          remark: "Snacks"
        }}
      />
    );
    const row = transactionRow.find("tr");

    expect(row.childAt(0).text()).toBe(moment(new Date()).format("DD-MM-YYYY"));
    expect(row.childAt(1).text()).toContain("75");
    expect(row.childAt(2).text()).toBe("Snacks");
  });

  it("should display data from props", () => {
    const transactionRow = shallow(
      <TransactionRow
        key={1}
        transaction={{
          month: "September",
          amount: "75",
          type: "CREDIT",
          remark: "Snacks"
        }}
      />
    );
    const row = transactionRow.find("tr");

    expect(row.childAt(0).text()).toBe(moment(new Date()).format("DD-MM-YYYY"));
    expect(row.childAt(1).text()).toContain("75");
    expect(row.childAt(2).text()).toBe("Snacks");
  });

  it("should render green background for credit transaction", () => {
    const transactionRow = shallow(
      <TransactionRow
        key={1}
        transaction={{
          month: "September",
          amount: "75",
          type: "CREDIT",
          remark: "Snacks"
        }}
      />
    );
    const rowColor = transactionRow.find("tr");
    expect(rowColor.props().class).toBe("table-success");
  });

  it("should render red background for debit transaction", () => {
    const transactionRow = shallow(
      <TransactionRow
        key={1}
        transaction={{
          month: "September",
          amount: "75",
          type: "DEBIT",
          remark: "Snacks"
        }}
      />
    );
    const rowColor = transactionRow.find("tr");
    expect(rowColor.props().class).toBe("table-danger");
  });
});
