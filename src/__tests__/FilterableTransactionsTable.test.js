import React from "react";
import { shallow } from "enzyme";
import FilterableTransactionsTable from "../FilterableTransactionsTable";
import TransactionsModel from "../TransactionsModel";
import TransactionRow from "../TransactionRow";
import SearchBar from "../SearchBar";

const transactionsList = [
  {
    "id": 1,
    "amount": 75,
    "day": "3",
    "month": "September",
    "year": "2018",
    "remarks": "Snacks",
    "transactionType": "DEBIT"
  },
  {
    "id": 2,
    "amount": 3000,
    "day": "7",
    "month": "September",
    "year": "2018",
    "remarks": "Petrol",
    "transactionType": "DEBIT"
  }
];

const modelWithTwoTransactions = new TransactionsModel(transactionsList);

beforeAll(() => {
  TransactionsModel.fetch = jest.fn(() => Promise.resolve(new TransactionsModel([])));
});

describe("FilterableTransactionsTable", () => {
  it("should render without crashing", () => {
    shallow(<FilterableTransactionsTable/>);
  });

  describe("Construction of view", () => {
    it("should have 1 row and 4 rows in table headers", () => {
      const transactions = shallow(<FilterableTransactionsTable/>);
      const headers = transactions.find("thead");

      expect(headers.find("tr")).toHaveLength(1);
      expect(headers.find("tr th")).toHaveLength(4);
    });

    it("should have one table body", () => {
      const transactions = shallow(<FilterableTransactionsTable/>);
      const tableBody = transactions.find("tbody");

      expect(tableBody).toHaveLength(1);
    });
  });

  describe("Listing of transactions", () => {
    it("should able to sent props to TransactionRow", async () => {
      TransactionsModel.fetch.mockResolvedValue(modelWithTwoTransactions);
      const transactions = shallow(<FilterableTransactionsTable/>);
      await Promise.resolve();
      const data = transactions.find(TransactionRow).at(0);

      expect(data.props().transaction).toMatchObject(transactionsList[0]);
    });

    it("should able to sent props to TransactionRow", async () => {
      TransactionsModel.fetch.mockResolvedValue(modelWithTwoTransactions);
      const transactions = shallow(<FilterableTransactionsTable/>);
      await Promise.resolve();
      const data = transactions.find(TransactionRow).at(1);

      expect(data.props().transaction).toMatchObject(transactionsList[1]);
    });
  });

  describe("SearchBar by remarks", () => {
    it("should able to search", () => {
      const transactions = shallow(<FilterableTransactionsTable/>);

      expect(transactions.find(SearchBar)).toHaveLength(1);
    });

    it("should able to filter transactions on search text", async () => {
      TransactionsModel.fetch.mockResolvedValue(modelWithTwoTransactions);
      const transactions = shallow(<FilterableTransactionsTable/>);
      await Promise.resolve();
      const search = transactions.find(SearchBar);

      search.simulate("search", "Snacks");

      const transactionRows = transactions.find(TransactionRow);
      expect(transactionRows).toHaveLength(1);
    });

    it("should able to filter transactions on search text", async () => {
      TransactionsModel.fetch.mockResolvedValue(modelWithTwoTransactions);
      const transactions = shallow(<FilterableTransactionsTable/>);
      await Promise.resolve();
      const search = transactions.find(SearchBar);

      search.simulate("search", "ops");

      const transactionRows = transactions.find(TransactionRow);
      expect(transactionRows).toHaveLength(0);
    });

  });
});
