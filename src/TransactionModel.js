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

  static transactionsUrl(walletId) {
    return `${
      process.env.REACT_APP_WALLET_API_URL
    }/wallets/${walletId}/transactions`;
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
      .post(TransactionModel.transactionsUrl(this._walletId), {
        type: this._type,
        amount: this._amount,
        remark: this._remark
      })
      .then(response => response);
  }

  static async fetchAll({ walletId, limit = "" }) {
    let transactions = [];
    await axios
      .get(TransactionModel.transactionsUrl(walletId), {
        params: { limit: limit }
      })
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
