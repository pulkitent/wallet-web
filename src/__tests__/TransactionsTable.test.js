import { shallow } from "enzyme/build";
import React from "react";
import { TransactionsTable } from "../TransactionsTable";
import TransactionRow from "../TransactionRow";

describe("TransactionsTable", () => {
  const noFilter = "";
  const transactionsList = [
    {
      id: 1,
      amount: 75,
      day: "3",
      month: "September",
      year: "2018",
      remarks: "Snacks",
      transactionType: "DEBIT"
    },
    {
      id: 2,
      amount: 3000,
      day: "7",
      month: "September",
      year: "2018",
      remarks: "Petrol",
      transactionType: "DEBIT"
    }
  ];

  it("should have headers", () => {
    const transactions = shallow(<TransactionsTable transactions={[]} />);
    const headers = transactions.find("thead");

    expect(headers.find("tr th")).toHaveLength(4);
    expect(
      headers
        .find("tr")
        .childAt(0)
        .text()
    ).toEqual("Date");
    expect(
      headers
        .find("tr")
        .childAt(1)
        .text()
    ).toEqual("Amount");
    expect(
      headers
        .find("tr")
        .childAt(2)
        .text()
    ).toEqual("Type");
    expect(
      headers
        .find("tr")
        .childAt(3)
        .text()
    ).toEqual("Remarks");
  });

  it("should send transactionModel as props to TransactionRow", async () => {
    const transactions = shallow(
      <TransactionsTable
        transactions={transactionsList}
        searchText={noFilter}
      />
    );
    const filteredRows = transactions.find(TransactionRow);

    expect(filteredRows.at(0).props().transaction).toMatchObject(
      transactionsList[0]
    );
  });

  describe("Filtering of transactionModel", () => {
    it("should list all transactionModel when there is no filter", async () => {
      const transactionsTable = shallow(
        <TransactionsTable
          transactions={transactionsList}
          searchText={noFilter}
        />
      );
      const filteredRows = transactionsTable.find(TransactionRow);

      expect(filteredRows).toHaveLength(2);
    });

    it("should list one transaction item when filter text is snacks", async () => {
      const transactionsTable = shallow(
        <TransactionsTable
          transactions={transactionsList}
          searchText={"Snacks"}
        />
      );
      const filteredRows = transactionsTable.find(TransactionRow);

      expect(filteredRows).toHaveLength(1);
    });
  });
});
