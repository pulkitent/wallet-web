import React from "react";
import WalletModel from "./WalletModel";
import LowBalanceMessage from "./LowBalanceMessage";

export default class Wallet extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { model: new WalletModel({balance:0})};
  }
  //TODO: Handle invalid Id fetch
  componentDidMount() {
    WalletModel.fetch(1).then((wallet) => {
      this.setState({ model: wallet });
    });
  }

  render() {
    return <div>
      <h1 id='balance'> Balance</h1>
      <h2 id='balanceAmount'>₹ {this.state.model.balance} </h2>
      <LowBalanceMessage balance={this.state.model.balance}/>
    </div>;
  }
}
