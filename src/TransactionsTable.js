import * as PropTypes from "prop-types";
import React from "react";
import TransactionRow from "./TransactionRow";

export function TransactionsTable(props) {
  return (
    <table align={"center"}>
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
          .map(transaction => {
            return (
              <TransactionRow key={transaction.id} transaction={transaction} />
            );
          })}
      </tbody>
    </table>
  );
}

TransactionsTable.propTypes = {
  transactions: PropTypes.array,
  searchText: PropTypes.string
};
