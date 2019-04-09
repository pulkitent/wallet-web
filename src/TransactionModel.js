import axios from "axios";

export class TransactionModel {
  constructor(walletId, type, amount, remark, createdAt, id) {
    this._id = id;
    this._type = type;
    this._amount = amount;
    this._remark = remark;
    this._walletId = walletId;
    this._createdAt = createdAt;
  }

  get id() {
    return this._id;
  }

  get createdAt() {
    return this._createdAt;
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
        `${
          process.env.REACT_APP_WALLET_API_URL
        }/wallets/${walletId}/transactions`
      )
      .then(response => {
        response.data.forEach(transaction => {
          const { id, walletId, type, amount, remark, createdAt } = transaction;
          transactions.push(
            new TransactionModel(walletId, type, amount, remark, createdAt, id)
          );
        });
      });
    return transactions;
  }

  static async fetchAll(walletId) {
    let transactions = [];
    await axios
      .get(
        `${
          process.env.REACT_APP_WALLET_API_URL
        }/wallets/${walletId}/transactions`
      )
      .then(response => {
        response.data.forEach(transaction => {
          const { id, walletId, type, amount, remark, createdAt } = transaction;
          transactions.push(
            new TransactionModel(walletId, type, amount, remark, createdAt, id)
          );
        });
      });
    return transactions;
  }
}
