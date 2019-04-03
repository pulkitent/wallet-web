import axios from "axios";

export default class WalletModel {
  constructor({ id, name, balance }) {
    this._balance = balance;
  }

  get balance() {
    return this._balance;
  }

  isBalanceLow() {
    return this._balance <= 10;
  }

  static async fetch(id) {
    const wallet = await axios.get(`${process.env.REACT_APP_WALLET_API_URL}/wallets/${id}`);
    return new WalletModel(wallet.data);
  }
}
