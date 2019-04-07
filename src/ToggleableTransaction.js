import React, { Component } from "react";
import { TransactionForm } from "./TransactionForm";
import Button from "react-bootstrap/Button";
import "./ToggelableTransaction.css";

export class ToggleableTransaction extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { showTransactionForm: false, type: "" };
  }

  toggleCreditForm = () => {
    this.setState({
      showTransactionForm: !this.state.showTransactionForm,
      type: "CREDIT"
    });
  };

  render() {
    return (
      <div className={"toggleable-transaction"}>
        <Button variant="success" id="credit" onClick={this.toggleCreditForm}>
          Credit
        </Button>
        {(() => {
          if (this.state.showTransactionForm) {
            return (
              <TransactionForm
                type={this.state.type}
                onSuccess={this.props.onSuccess()}
                style={{ padding: 100 }}
              />
            );
          }
        })()}
      </div>
    );
  }
}
