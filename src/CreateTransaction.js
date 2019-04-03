import React, {Component} from "react";
import TransactionForm from "./TransactionForm";

class CreateTransaction extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {"showTransactionForm": false, "type": ""};
    }

    render() {
        return (
            <div>
                <button id="credit" onClick={this.handleCreditClick}>Credit</button>
                {
                    this.state.showTransactionForm ?
                        <TransactionForm type={this.state.type} onTransaction={this.handleTransaction}/>
                        : null
                }
            </div>
        );
    }

    handleCreditClick = () => {
        this.setState({"showTransactionForm": !this.state.showTransactionForm});
        this.setState({"type": "CREDIT"});
    }

    handleTransaction = () => {
        this.props.onTransaction();
    }
}

export default CreateTransaction;
