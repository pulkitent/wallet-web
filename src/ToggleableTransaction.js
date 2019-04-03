import React, {Component} from "react";
import TransactionForm from "./TransactionForm";

class ToggleableTransaction extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {"showTransactionForm": false, "type": ""};
    }

    render() {
        return (
            <div>
                <button id="credit" onClick={this.toggleCreditForm}>Credit</button>
                {((() => {
                    if(this.state.showTransactionForm){
                        return <TransactionForm type={this.state.type} onTransaction={this.props.onTransaction()}/>;
                    }
                })())
                }
            </div>
        );
    }

    toggleCreditForm = () => {
        this.setState({"showTransactionForm": !this.state.showTransactionForm});
        this.setState({"type": "CREDIT"});
    }
}

export default ToggleableTransaction;
