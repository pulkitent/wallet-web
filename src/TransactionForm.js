import React, { Component } from "react";
import { TransactionModel } from "./TransactionModel";
import Button from "react-bootstrap/Button";

export class TransactionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transaction: new TransactionModel(),
      message: "",
      errors: {}
    };
  }
  handleValidation() {
    let fields = this.state.transaction;
    let errors = {};
    let formIsValid = true;

    //Remarks
    if (!fields["remark"]) {
      formIsValid = false;
      errors["remark"] = "Cannot be empty";
    }

    if (typeof fields["remark"] !== "undefined") {
      if (!fields["remark"].match(/^.{1,50}$/)) {
        formIsValid = false;
        errors["remark"] = "Only 50 characters allowed";
      }
    }

    //Amount
    if (!fields["amount"]) {
      formIsValid = false;
      errors["amount"] = "Cannot be empty";
    }

    if (typeof fields["amount"] !== "undefined") {
      if (!fields["amount"].match(/^([1-9][0-9]{0,3}|10000)$/)) {
        formIsValid = false;
        errors["amount"] = "Amount should be between 1-10k";
      }
    }

    this.setState({ errors: errors });
    return formIsValid;
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
    if (this.handleValidation()) {
      this.state.transaction.save().then(() => {
        this.setState({ message: "Transaction successful" });
        this.props.onSuccess();
      });
    }
  };

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
          pattern={/^([1-9][0-9]{0,3}|10000)$/}
          onChange={this.handleAmountChange}
          value={this.state.transaction.amount}
        />
        <br />
        <span id="amountError" style={{ color: "red" }}>
          {this.state.errors["amount"]}
        </span>
        <br />
        <br />
        <label htmlFor="remark" style={{ margin: 7 }}>
          Remarks
        </label>
        <input
          type="text"
          id="remark"
          name="remark"
          pattern={/^.{1,50}$/}
          onChange={this.handleRemarkChange}
          value={this.state.transaction.remark}
        />
        <br />
        <span id="remarkError" style={{ color: "red" }}>
          {this.state.errors["remark"]}
        </span>
        <br />
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
