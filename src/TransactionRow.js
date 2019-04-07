import React from "react";

export default class TransactionRow extends React.Component {
  render() {
    const { month, amount, transactionType, remarks } = this.props.transaction;
    return (
      <tr>
        <td>{month}</td>
        <td>{amount}</td>
        <td>{transactionType}</td>
        <td>{remarks}</td>
      </tr>
    );
  }
}
