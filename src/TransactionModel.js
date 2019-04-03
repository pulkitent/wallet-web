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
        // TODO: update wallet balance !!
        return axios.post("/wallets/1/transactions",
            {"type": this._type, "amount": this._amount, "remark": this._remark});
    }
}
