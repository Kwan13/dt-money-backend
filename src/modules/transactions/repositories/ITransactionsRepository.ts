import { Transaction } from '@prisma/client';

export interface ITransactionCreateData {
  title: string;
  value: number;
  type: 'income' | 'outcome';
  category: string;
}

export interface IBalance {
  income: number;
  outcome: number;
  total: number;
}

export interface ITransactionsRepository {
  create(data: ITransactionCreateData): Promise<Transaction>;
  list(): Promise<Transaction[]>;
  getBalance(): Promise<IBalance>;
  delete(id: string): Promise<Transaction>;
}
