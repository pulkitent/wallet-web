import React from "react";
import WalletModel from "./WalletModel";

export default class Wallet extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { model: new WalletModel({ balance: 0 }) };
  }

  componentDidMount() {
    WalletModel.fetch(1).then(wallet => {
      this.setState({ model: wallet });
    });
  }

  renderLowBalanceMessage() {
    return (
      <div id="lowBalanceMessage" style={{ color: "red", fontSize: 30 }}>
        Low Balance
      </div>
    );
  }

  render() {
    return (
      <div>
        <div id="balance" style={{ fontSize: 70 }}>
          {" "}
          Balance
        </div>
        <div id="balanceAmount" style={{ fontSize: 60 }}>
          ₹ {this.state.model.balance}{" "}
        </div>
        {this.state.model.isBalanceLow() ? this.renderLowBalanceMessage() : ""}
      </div>
    );
  }
}
