import axios from "axios";
import {TransactionModel} from "../TransactionModel";

jest.mock("axios");

const transaction = {
    "id": 1,
    "walletId": 1,
    "amount": 10,
    "remark": "Snacks",
    "type": "CREDIT"
};

describe("TransactionModel", () => {
    describe("#save", () => {
        it('should call the endpoint on save', () => {
            const model = transactionModel();
            const endpointUrl = "basePath/wallets/" + model.walletId + "/transactions";
            const data = {type: model.type, remark: model.remark, amount: model.amount};

            model.save();

            expect(axios.post).toHaveBeenCalledWith(endpointUrl, data);
        });

        it("should add new transaction given id, type, amount, remark", async () => {
            axios.post.mockResolvedValue(new Promise((resolve) => resolve(transaction)));
            const transactionModel = transactionModel();
            let savedTransaction = {};

            await transactionModel.save()
                .then(response => savedTransaction = response);

            await Promise.resolve();
            expect(savedTransaction).toEqual(transaction);
        });
    });

    describe('#amount', () => {
        it('should update the amount of transaction', () => {
            const model = transactionModel();

            model.amount = 110;

            expect(model.amount).toBe(110);
        });
    });
});

const transactionModel = function () {
    return new TransactionModel(1, "CREDIT", 10, "Snacks");
};
