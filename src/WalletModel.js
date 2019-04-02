import axios from "axios";

export default class WalletModel {
  constructor({id, name, balance}) {
    this._balance = balance;
  }

  get balance() {
    return this._balance;
  }

  static async fetch(id) {
    const wallet = await axios.get("/wallets/" + id);
    return new WalletModel(wallet.data);
  }
}
