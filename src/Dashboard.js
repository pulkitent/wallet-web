import React, { Component } from "react";
import { ToggleableTransaction } from "./ToggleableTransaction";
import { TransactionsTable } from "./TransactionsTable";
import Wallet from "./Wallet";
import TransactionsModel from "./TransactionsModel";
import Container from "react-bootstrap/Container";

const walletIdContext = React.createContext(1);
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
      <Container>
        <Wallet/>
        <ToggleableTransaction onSuccess={() => {}} />
        <TransactionsTable searchText={''} transactions={this.state.transactionModel}/>
      </Container>
    );
  }
}

export default Dashboard;
