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
    WalletModel.fetch(10000).then((wallet) => {
      this.setState({ model: wallet });
    });
  }

  render() {
    this.isBalanceLow();
    return <div>
      <h1 id='balance'> Balance</h1>
      <h2 id='balanceAmount'>₹ {this.state.model.balance} </h2>
      <LowBalanceMessage/>
    </div>;
  }

  isBalanceLow() {
    let lowBalanceAlert;
    if(this.state.model.balance<=10){
      lowBalanceAlert = <h5 style={{color : 'red'}}>Low Balance</h5>
    }
    return lowBalanceAlert;
  }
}
