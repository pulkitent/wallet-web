import React, { Component } from "react";
import { ToggleableTransaction } from "./ToggleableTransaction";
import { TransactionsTable } from "./TransactionsTable";
import Wallet from "./Wallet";
import TransactionsModel from "./TransactionsModel";

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {transactionModel : []};
  }

  async componentDidMount() {
    const transactions = await TransactionsModel.fetch();
    this.setState({ transactionModel: transactions });
    console.log(this.state.transactionModel);
  }

  render() {
    return (
      <div>
        <Wallet/>
        <ToggleableTransaction onSuccess={() => {}} />
        <TransactionsTable searchText="" transactions={this.state.transactionModel}/>
      </div>
    );
  }
}

export default Dashboard;
