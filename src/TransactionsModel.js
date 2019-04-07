import axios  from "axios";

export default class TransactionsModel {
  constructor(transactions) {
    this._transactions = transactions;
  }

  get transactions() {
    return this._transactions;
  }

  static async fetch() {
    const transactions = await axios.get(
      `${process.env.REACT_APP_WALLET_API_URL}/wallets/1/transactions`
    );

    console.log(transactions.data);
    return transactions.data;
  }
}
