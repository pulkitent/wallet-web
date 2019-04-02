import axios from "axios";

export default class TransactionModel {
  constructor(type, amount, remark) {
    this._type = type;
    this._amount = amount;
    this._remark = remark;
  }

  set amount(value) {
    this._amount = value;
  }

  get amount() {
    return this._amount;
  }

  get remark() {
    return this._remark;
  }

  set remark(value) {
    this._remark = value;
  }

  save() {
    console.log("Inside Post");
    /*axios({
      method: "post",
      url: "/wallets/1/transactions",
      data: { "id": 0, "amount": 100, "type": "CREDIT" }
    });*/
    axios.post("www.google.com")
      .then(res => console.log(res));
  }
}
