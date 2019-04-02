import axios from "axios";

export default class TransactionsModel {
  constructor(transactions) {
    this._transactions = transactions;
  }

  get transactions() {
    return this._transactions;
  }

  static async fetch() {
    const transactions = await axios.get("/wallets/1/transactions");
    return new TransactionsModel(transactions.data);
  }
}