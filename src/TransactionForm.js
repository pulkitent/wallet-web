import React, { Component } from "react";
import { TransactionModel } from "./TransactionModel";

export class TransactionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transaction: new TransactionModel(),
      message: ""
    };
  }

  handleAmountChange = event => {
    // TODO: get wallet id from query params
    this.setState({
      transaction: new TransactionModel(
        1,
        this.props.type,
        event.target.value,
        this.state.transaction.remark
      )
    });
  };

  handleRemarkChange = event => {
    // TODO: get wallet id from query params
    this.setState({
      transaction: new TransactionModel(
        1,
        this.props.type,
        this.state.transaction.amount,
        event.target.value
      )
    });
  };

  handleFormSubmit = event => {
    this.state.transaction.save().then(() => {
      this.setState({ message: "Transaction successful" });
      this.props.onSuccess();
    });
  };

  render() {
    return (
      <div>
        <h1>{this.props.type}</h1>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            onChange={this.handleAmountChange}
            value={this.state.transaction.amount}
          />
          <br />
          <label htmlFor="remark">Remark</label>
          <input
            type="text"
            id="remark"
            name="remark"
            onChange={this.handleRemarkChange}
            value={this.state.transaction.remark}
          />
          <br />
          <input type="submit" id="proceed" value="Proceed" onClick={this.handleFormSubmit}/>
          <div id="message">{this.state.message}</div>
      </div>
    );
  }
}

// TODO: remove form
