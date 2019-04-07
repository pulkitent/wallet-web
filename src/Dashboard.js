import React, { Component } from "react";
import { ToggleableTransaction } from "./ToggleableTransaction";
import { TransactionsTable } from "./TransactionsTable";
import Wallet from "./Wallet";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Wallet/>
        <ToggleableTransaction onSuccess={() => {}} />
        <TransactionsTable searchText="" transactions={[]}/>
      </div>
    );
  }
}

export default Dashboard;
