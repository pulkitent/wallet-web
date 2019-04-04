import React from "react";
import WalletModel from "./WalletModel";

export default class Wallet extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { model: new WalletModel({ balance: 0 }) };
  }

  componentDidMount() {
    WalletModel.fetch(1).then((wallet) => {
      this.setState({ model: wallet });
    });
  }

  render() {
    return <div>
      <h1 id='balance'> Your balance is Rs {this.state.model.balance} </h1>
    </div>;
  }
}