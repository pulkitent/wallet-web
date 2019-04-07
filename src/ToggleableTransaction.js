import React, { Component } from "react";
import { TransactionForm } from "./TransactionForm";
import Button from 'react-bootstrap/Button';

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
        <Button variant="success" id="Credit" onClick={this.toggleCreditForm}
        style={{marginTop:50}}>Credit</Button>
        {(() => {
          if (this.state.showTransactionForm) {
            return (
              <TransactionForm
                type={this.state.type}
                onSuccess={this.props.onSuccess()}
                style={{padding : 100}}
              />
            );
          }
        })()}
      </div>
    );
  }
}
