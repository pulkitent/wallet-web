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

  get walletId() {
    return this._walletId;
  }

  get type() {
    return this._type;
  }

  async save() {
    return axios
      .post(
        `${process.env.REACT_APP_WALLET_API_URL}/wallets/${
          this._walletId
        }/transactions`,
        { type: this._type, amount: this._amount, remark: this._remark }
      )
      .then(response => response);
  }

  static async fetch(walletId) {
    let transactions = [];
    await axios
      .get(
        `${process.env.REACT_APP_WALLET_API_URL}/wallets/${
          walletId._currentValue
        }/transactions`
      )
      .then(response => {
        response.data.map(transaction => {
          const { walletId, type, amount, remark } = transaction;
          transactions.push(
            new TransactionModel(walletId, type, amount, remark)
          );
        });
      });
    return transactions;
  }
}
