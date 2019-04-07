import { shallow } from "enzyme";
import React from "react";
import TransactionRow from "../TransactionRow";

describe("TransactionRow", () => {
  it("should render without crash", () => {
    const transactionRow = shallow(<TransactionRow transaction={{}} />);

    expect(transactionRow.type()).toEqual("tr");
  });

  it("should display one transaction", () => {
    const transactionRow = shallow(<TransactionRow transaction={{}} />);
    const row = transactionRow.find("tr");

    expect(row).toHaveLength(1);
    expect(row.find("td")).toHaveLength(4);
  });

  it("should display static data", () => {
    const transactionRow = shallow(
      <TransactionRow
        key={1}
        transaction={{
          month: "September",
          amount: "75",
          transactionType: "DEBIT",
          remarks: "Snacks"
        }}
      />
    );
    const row = transactionRow.find("tr");

    expect(row.childAt(0).text()).toBe("September");
    expect(row.childAt(1).text()).toBe("75");
    expect(row.childAt(2).text()).toBe("DEBIT");
    expect(row.childAt(3).text()).toBe("Snacks");
  });

  it("should display data from props", () => {
    const transactionRow = shallow(
      <TransactionRow
        key={1}
        transaction={{
          month: "September",
          amount: "75",
          transactionType: "DEBIT",
          remarks: "Snacks"
        }}
      />
    );
    const row = transactionRow.find("tr");

    expect(row.childAt(0).text()).toBe("September");
    expect(row.childAt(1).text()).toBe("75");
    expect(row.childAt(2).text()).toBe("DEBIT");
    expect(row.childAt(3).text()).toBe("Snacks");
  });
});
