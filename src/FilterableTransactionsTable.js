import React from "react";
import TransactionsModel from "./TransactionsModel";
import SearchBar from "./SearchBar";
import {TransactionsTable} from "./TransactionsTable";

export default class FilterableTransactionsTable extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { model: new TransactionsModel([]), searchText: "" };
  }

  componentDidMount() {
    TransactionsModel.fetch().then((transactions) => {
      this.setState({ model: transactions });
    });
  }

  handleSearch = (searchText) => {
    this.setState({ searchText: searchText });
  };


  render() {
    return (
      <div>
        <SearchBar onSearch={this.handleSearch}/><br/>
        <TransactionsTable searchText={this.state.searchText} transactions={this.state.model.transactions}/>
      </div>
    );
  }
}
