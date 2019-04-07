import React, { Component } from "react";
import { TransactionModel } from "./TransactionModel";
import Button from 'react-bootstrap/Button';

export class TransactionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transaction: new TransactionModel()
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
    event.preventDefault();
    this.state.transaction.save().then(() => {
      this.props.onSuccess();
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <br />
          <label htmlFor="amount" style={{ margin: 7 }}>
            Amount
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            onChange={this.handleAmountChange}
            value={this.state.transaction.amount}
          />
          <br />
          <br />
          <label htmlFor="remark" style={{ margin: 7 }}>
            Remarks
          </label>
          <input
            type="text"
            id="remark"
            name="remark"
            onChange={this.handleRemarkChange}
            value={this.state.transaction.remark}
          />
          <br />
          <br />
          <Button type="submit" variant="light">Proceed</Button>
        </form>
      </div>
    );
  }
}

// TODO: remove form
