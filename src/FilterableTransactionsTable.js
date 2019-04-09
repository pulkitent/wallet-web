import React from "react";
import SearchBar from "./SearchBar";
import { TransactionsTable } from "./TransactionsTable";
import { TransactionModel } from "./TransactionModel";

export default class FilterableTransactionsTable extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { transactions: [], searchText: "" };
  }

  async componentDidMount() {
    let walletId = 1;
    const transactions = await TransactionModel.fetchAll(walletId);
    this.setState({ transactions: transactions });
  }

  handleSearch = searchText => {
    this.setState({ searchText: searchText });
  };

  render() {
    return (
      <div>
        <SearchBar onSearch={this.handleSearch} />
        <br />
        <TransactionsTable
          searchText={this.state.searchText}
          transactions={this.state.transactions}
        />
      </div>
    );
  }
}
