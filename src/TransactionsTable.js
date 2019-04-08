import * as PropTypes from "prop-types";
import React from "react";
import TransactionRow from "./TransactionRow";
import Table from "react-bootstrap/Table";

export function TransactionsTable(props) {
  return (
    <Table align={"center"} className={"table table-bordered table-hover"}>
      <thead>
        <tr>
          <th>Date</th>
          <th>Amount</th>
          <th>Remarks</th>
        </tr>
      </thead>
      <tbody>
        {props.transactions
          .filter(transaction => {
            return transaction.remark.indexOf(props.searchText) === 0;
          })
          .map(transaction => {
            return (
              <TransactionRow key={transaction.id} transaction={transaction} />
            );
          })}
      </tbody>
    </Table>
  );
}

TransactionsTable.propTypes = {
  transactions: PropTypes.array,
  searchText: PropTypes.string
};
