import React, { Component } from "react";
import { TransactionForm } from "./TransactionForm";
import Button from "react-bootstrap/Button";
import "./ToggelableTransaction.css";

export class ToggleableTransaction extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { showTransactionForm: false, type: "" };
  }

  toggleForm = value => {
    this.setState({
      showTransactionForm: !this.state.showTransactionForm,
      type: value
    });
  };

  render() {
    return (
      <div className={"toggleable-transaction"}>
        <Button
          variant="success"
          id="credit"
          onClick={() => this.toggleForm("CREDIT")}
        >
          Credit
        </Button>
        <Button
          variant="danger"
          id="debit"
          onClick={() => this.toggleForm("DEBIT")}
        >
          Debit
        </Button>
        {(() => {
          if (this.state.showTransactionForm) {
            return (
              <TransactionForm
                type={this.state.type}
                onSuccess={this.props.onSuccess}
                style={{ padding: 100 }}
              />
            );
          }
        })()}
      </div>
    );
  }
}
