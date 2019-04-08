import React from "react";
import moment from "moment";

export default class TransactionRow extends React.Component {
  render() {
    const { createdAt, amount, type, remark } = this.props.transaction;
    return (
      <tr>
        <td>{moment(createdAt).format("DD-MM-YYYY")}</td>
        <td>₹ {amount}</td>
        <td>{type}</td>
        <td>{remark}</td>
      </tr>
    );
  }
}
