import React, { Component } from "react";
import { TransactionModel } from "./TransactionModel";
import Button from "react-bootstrap/Button";

export class TransactionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transaction: new TransactionModel(),
      message: "",
      amountErrors: {},
      remarksErrors: {}
    };
  }

  handleAmountChange = event => {
    let errors = {};
    // TODO: get wallet id from query params
    let newTransaction = new TransactionModel(
      1,
      this.props.type,
      event.target.value,
      this.state.transaction.remark
    );
    this.validateAmountChange(newTransaction, errors);
  };

  validateAmountChange(newTransaction, errors) {
    if (newTransaction.isValidAmount()) {
      this.setState({
        transaction: newTransaction,
        amountErrors: []
      });
    } else {
      errors["amount"] = "Amount should be between 1-10k";
      this.setState({ transaction: {}, amountErrors: errors });
    }
  }

  handleRemarkChange = event => {
    let errors = {};
    let newTransaction = new TransactionModel(
      1,
      this.props.type,
      this.state.transaction.amount,
      event.target.value
    );
    this.validateRemarkChange(newTransaction, errors);
  };

  validateRemarkChange(newTransaction, errors) {
    if (newTransaction.isValidRemark()) {
      // TODO: get wallet id from query params
      this.setState({
        transaction: newTransaction,
        remarksErrors: []
      });
    } else {
      errors["remark"] = "Only 50 characters allowed";
      this.setState({ transaction: {}, remarksErrors: errors });
    }
  }

  handleFormSubmit = () => {
    const amountErrors = this.state.amountErrors;
    const remarksErrors = this.state.remarksErrors;

    if (amountErrors.length === 0 && remarksErrors.length === 0) {
      this.saveTransaction(amountErrors);
    }
  };

  saveTransaction(amountErrors) {
    this.state.transaction
      .save()
      .then(() => {
        this.setState({ message: "Transaction successful" });
        this.props.onSuccess();
      })
      .catch(error => {
        amountErrors["amount"] = error.response.data.message;
        this.setState({ amountErrors: amountErrors });
      });
  }

  render() {
    return (
      <div>
        <br/>
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
        <br/>
        <span id="amountError" style={{ color: "red" }}>
          {this.state.amountErrors["amount"]}
        </span>
        <br/>
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
        <br/>
        <span id="remarkError" style={{ color: "red" }}>
          {this.state.remarksErrors["remark"]}
        </span>
        <br/>
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
