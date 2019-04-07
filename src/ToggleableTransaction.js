import React, { Component } from "react";
import { TransactionForm } from "./TransactionForm";
import "./ButtonStyle.css";

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
      <div>
        <button class="button" id="credit" onClick={this.toggleCreditForm}>
          Credit
        </button>
        {(() => {
          if (this.state.showTransactionForm) {
            return (
              <TransactionForm
                type={this.state.type}
                onSuccess={this.props.onSuccess()}
              />
            );
          }
        })()}
      </div>
    );
  }
}
