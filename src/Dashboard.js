import React, { Component } from "react";
import { ToggleableTransaction } from "./ToggleableTransaction";
import { TransactionsTable } from "./TransactionsTable";
import Wallet from "./Wallet";
import { TransactionModel } from "./TransactionModel";
import Container from "react-bootstrap/Container";

const walletIdContext = React.createContext(1);

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { transactions: [] };
  }

  async componentDidMount() {
    const fetchParams = {
      walletId: walletIdContext._currentValue,
      limit: 5
    };
    const transactions = await TransactionModel.fetchAll(fetchParams);
    this.setState({ transactions: transactions });
  }

  render() {
    return (
      <Container>
        <Wallet />
        <ToggleableTransaction onSuccess={() => {}} />
        <TransactionsTable
          searchText={""}
          transactions={this.state.transactions}
        />
      </Container>
    );
  }
}

export default Dashboard;
