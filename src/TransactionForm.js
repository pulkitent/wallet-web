import React, {Component} from "react";
import TransactionModel from "./TransactionModel";


class TransactionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transaction: new TransactionModel()
        };
        this.handleAmountChange = this.handleAmountChange.bind(this);
        this.handleRemarkChange = this.handleRemarkChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleAmountChange(event) {
        this.setState({transaction: new TransactionModel(this.props.type, event.target.value, this.state.transaction.remark)});
    }

    handleRemarkChange(event) {
        this.setState({transaction: new TransactionModel(this.props.type, this.state.transaction.amount, event.target.value)});
    }

    handleFormSubmit(event) {
        event.preventDefault();
        this.state.transaction.save().then(() => {
            this.props.onTransaction();
        });
    }

    render() {
        return (
            <div>
                <h1>{this.props.type}</h1>
                <form onSubmit={this.handleFormSubmit}>
                    <label htmlFor="amount">Amount</label>
                    <input type="number" id="amount" name="amount" onChange={this.handleAmountChange}
                           value={this.state.transaction.amount}/>
                    <br/>
                    <label htmlFor="remark">Remark</label>
                    <input type="text" id="remark" name="remark" onChange={this.handleRemarkChange}
                           value={this.state.transaction.remark}/>
                    <br/>
                    <input type="submit" id="proceed" value="Proceed"/>
                </form>
            </div>
        );
    }

}

export default TransactionForm;

// TODO: remove form
