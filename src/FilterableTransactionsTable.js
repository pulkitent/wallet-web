import React from "react";
import TransactionsModel from "./TransactionsModel";
import TransactionRow from "./TransactionRow";
import SearchBar from "./SearchBar";

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
    this.setState({searchText : searchText});
  };


  render() {
    return (
      <div>
        <SearchBar onSearch={this.handleSearch}/><br/>
        <table>
          <thead>
          <tr>
            <th> Month</th>
            <th> Amount</th>
            <th> Type</th>
            <th> Remarks</th>
          </tr>
          </thead>
          <tbody>
          {this.state.model.transactions
            .filter((transaction) => {
              return (transaction.remarks.indexOf(this.state.searchText) === 0);
            })
            .map((transaction) => {
              return <TransactionRow key={transaction.id} transaction={transaction}/>;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
