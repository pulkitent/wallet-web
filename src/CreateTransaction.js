import React, { Component } from "react";
import TransactionForm from "./TransactionForm";

class CreateTransaction extends Component {


  constructor(props, context) {
    super(props, context);
    this.state = {formStatus : ""};
  }

  render() {
    return (
      <div>
        <button id="credit" onClick={this.handleClick}>Credit</button>
        <div>{this.state.formStatus}</div>
      </div>
    );
  }

  handleClick = () => {
    this.setState({formStatus : <TransactionForm/>});
  }
}

export default CreateTransaction;
