import * as PropTypes from "prop-types";
import React from "react";
import TransactionRow from "./TransactionRow";

export function TransactionsTable(props) {
    return <table align={'center'}>
        <thead>
        <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Remarks</th>
        </tr>
        </thead>
        <tbody>
        {props.transactions
            .filter((transaction) => {
                return (transaction.remarks.indexOf(props.searchText) === 0);
            })
            .map((transaction) => {
                return <TransactionRow key={transaction.id} transaction={transaction}/>;
            })}
        </tbody>
    </table>;
}

TransactionsTable.propTypes = {
    transactions: PropTypes.array,
    searchText: PropTypes.string
};