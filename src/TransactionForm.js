import React, { Component } from "react";
import TransactionModel from "./TransactionModel";

class TransactionForm extends Component {
  constructor(props) {
    super(props);
    this.state = { "transaction": new TransactionModel() };
    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.handleRemarkChange = this.handleRemarkChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleAmountChange(event) {
    const transaction = this.state.transaction;
    transaction.amount = event.target.value;
    this.setState({ "transaction": transaction });
  }

  handleRemarkChange(event) {
    const transaction = this.state.transaction;
    transaction.remark = event.target.value;
    this.setState({ "transaction": transaction });
  }

   handleFormSubmit(event) {
    const transaction = this.state.transaction;
    console.log(transaction);
    const response =  transaction.save();
    console.log(response);
  }

  render() {
    return (
      <div>
        <form >
          <label htmlFor="amount">Amount</label>
          <input type="number" id="amount" name="amount" onChange={this.handleAmountChange}
                 value={this.state.transaction.amount}/>
          <br/>
          <label htmlFor="remark">Remark</label>
          <input type="text" id="remark" name="remark" onChange={this.handleRemarkChange}
                 value={this.state.transaction.remark}/>
          <br/>
          <input type="submit" id="proceed" value="Proceed" onSubmit={this.handleFormSubmit}/>
        </form>
      </div>
    );
  }

}

export default TransactionForm;
