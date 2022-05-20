import { Router } from 'express';

import { CreateTransactionController } from '../modules/transactions/useCases/createTransaction/CreateTransactionController';
import { ListTransactionsController } from '../modules/transactions/useCases/listTransactions/ListTransactionsController';
import { GetBalanceController } from '../modules/transactions/useCases/getBalance/GetBalanceController';
import { DeleteTransactionController } from '../modules/transactions/useCases/deleteTransaction/DeleteTransactionController';

export const transactionRoutes = Router();

const createTransactionController = new CreateTransactionController();
const listTransactionsController = new ListTransactionsController();
const getBalanceController = new GetBalanceController();
const deleteTransactionController = new DeleteTransactionController();

transactionRoutes.post('/', createTransactionController.handle);
transactionRoutes.get('/', listTransactionsController.handle);
transactionRoutes.get('/balance', getBalanceController.handle);
transactionRoutes.delete('/', deleteTransactionController.handle);
