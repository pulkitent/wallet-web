import axios from "axios";

export class TransactionModel {
  constructor(walletId, type, amount, remark) {
    this._type = type;
    this._amount = amount;
    this._remark = remark;
    this._walletId = walletId;
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
    //TODO : Take wallet id from state
    return axios.post(`${process.env.REACT_APP_WALLET_API_URL}/wallets/${this._walletId}/transactions`,
      { "type": this._type, "amount": this._amount, "remark": this._remark });
  }
}
