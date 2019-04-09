import React from "react";
import { shallow } from "enzyme";
import FilterableTransactionsTable from "../FilterableTransactionsTable";
import SearchBar from "../SearchBar";
import { TransactionsTable } from "../TransactionsTable";
import { TransactionModel } from "../TransactionModel";

const transactionsList = [
  {
    id: 1,
    amount: 75,
    day: "3",
    month: "September",
    year: "2018",
    remarks: "Snacks",
    transactionType: "DEBIT12345"
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

describe("FilterableTransactionsTable", () => {
  it("should render without crashing", () => {
    shallow(<FilterableTransactionsTable />);
  });

  describe("SearchBar by remarks", () => {
    it("should able to search", () => {
      const transactions = shallow(<FilterableTransactionsTable />);

      expect(transactions.find(SearchBar)).toHaveLength(1);
    });

    it("should able to filter transactions on search text", async () => {
      const transactions = shallow(<FilterableTransactionsTable />);
      const search = transactions.find(SearchBar);

      search.simulate("search", "Snacks");

      expect(transactions.find(TransactionsTable).props().searchText).toEqual(
        "Snacks"
      );
    });
  });

  it("should show transactions", async () => {
    TransactionModel.fetch = jest.fn();
    TransactionModel.fetch.mockResolvedValue(transactionsList);
    const filterableTable = shallow(<FilterableTransactionsTable />);

    await Promise.resolve();

    expect(filterableTable.find(TransactionsTable)).toHaveLength(1);
    expect(filterableTable.find(TransactionsTable).props().transactions).toBe(
      transactionsList
    );
  });
});
