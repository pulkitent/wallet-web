import React, { Component } from "react";
import { TransactionModel } from "./TransactionModel";
import Button from "react-bootstrap/Button";

export class TransactionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transaction: new TransactionModel(),
      message: "",
      amountError: "",
      remarksError: ""
    };
  }

  handleAmountChange = event => {
    // TODO: get wallet id from query params
    let newTransaction = new TransactionModel(
      1,
      this.props.type,
      event.target.value,
      this.state.transaction.remark
    );
    this.validateAmountChange(newTransaction);
  };

  validateAmountChange(newTransaction) {
    if (newTransaction.isValidAmount()) {
      this.setState({
        transaction: newTransaction,
        amountError: []
      });
    } else {
      let amountError = "Amount should be between 1-10k";
      this.setState({ transaction: {}, amountError: amountError });
    }
  }

  handleRemarkChange = event => {
    let newTransaction = new TransactionModel(
      1,
      this.props.type,
      this.state.transaction.amount,
      event.target.value
    );
    this.validateRemarkChange(newTransaction);
  };

  validateRemarkChange(newTransaction) {
    if (newTransaction.isValidRemark()) {
      // TODO: get wallet id from query params
      this.setState({
        transaction: newTransaction,
        remarksError: []
      });
    } else {
      let remarkError = "Only 50 characters allowed";
      this.setState({ transaction: {}, remarksError: remarkError });
    }
  }

  handleFormSubmit = () => {
    const amountError = this.state.amountError;
    const remarksError = this.state.remarksError;

    if (amountError.length === 0 && remarksError.length === 0) {
      this.saveTransaction();
    }
  };

  saveTransaction() {
    this.state.transaction
      .save()
      .then(() => {
        this.setState({ message: "Transaction successful" });
        this.props.onSuccess();
      })
      .catch(error => {
        const amountError = error.response.data.message;
        this.setState({ amountError: amountError });
      });
  }

  render() {
    return (
      <div>
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
        <span id="amountError" style={{ color: "red" }}>
          {this.state.amountError}
        </span>
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
        <span id="remarkError" style={{ color: "red" }}>
          {this.state.remarksError}
        </span>
        <br />
        <Button
          id="proceed"
          type="submit"
          variant="secondary"
          onClick={this.handleFormSubmit}
        >
          Proceed
        </Button>
        <div id="message">{this.state.message}</div>
      </div>
    );
  }
}
