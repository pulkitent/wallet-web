import React, { Component } from "react";
import TransactionForm from "./TransactionForm";

class CreateTransaction extends Component {
  render() {
    return (
      <div>
        <button id="credit">Credit</button>
        <TransactionForm/>
      </div>
    );
  }
}

export default CreateTransaction;
