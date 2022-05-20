import { PrismaClient, Transaction } from '@prisma/client';
import {
  IBalance,
  ITransactionCreateData,
  ITransactionsRepository,
} from '../ITransactionsRepository';

import { prisma } from '../../../../prisma';

export class TransactionsRepository implements ITransactionsRepository {
  private repository: PrismaClient;

  constructor() {
    this.repository = prisma;
  }

  async create({
    title,
    category,
    type,
    value,
  }: ITransactionCreateData): Promise<Transaction> {
    const transaction = await this.repository.transaction.create({
      data: {
        title,
        category,
        type,
        value,
      },
    });

    return transaction;
  }

  async list(): Promise<Transaction[]> {
    const transactions = await this.repository.transaction.findMany();

    return transactions;
  }

  async getBalance(): Promise<IBalance> {
    const transactions = await this.list();

    const { income, outcome } = transactions.reduce(
      (accumulator, transaction) => {
        switch (transaction.type) {
          case 'income':
            accumulator.income += Number(transaction.value);
            break;
          case 'outcome':
            accumulator.outcome += Number(transaction.value);
            break;
          default:
            break;
        }

        return accumulator;
      },
      {
        income: 0,
        outcome: 0,
      },
    );

    const total = income - outcome;

    return { income, outcome, total };
  }

  delete(id: string) {
    const transaction = this.repository.transaction.delete({
      where: {
        id,
      },
    });

    return transaction;
  }
}
