import React from "react";
import moment from "moment";

//TODO : use tree shaking for moment
export default class TransactionRow extends React.Component {
  render() {
    const { createdAt, amount, type, remark } = this.props.transaction;
    let rowBg = type === "CREDIT" ? "table-success" : "table-danger";
    return (
      <tr class={rowBg}>
        <td>{moment(createdAt).format("DD-MM-YYYY")}</td>
        <td>₹ {amount}</td>
        <td>{remark}</td>
      </tr>
    );
  }
}
