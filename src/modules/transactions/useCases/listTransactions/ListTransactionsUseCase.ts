import { Transaction } from '@prisma/client';
import { inject, injectable } from 'tsyringe';
import { ITransactionsRepository } from '../../repositories/ITransactionsRepository';

@injectable()
export class ListTransactionsUseCase {
  constructor(
    @inject('TransactionsRepository')
    private transactionsRepository: ITransactionsRepository,
  ) {}

  async execute(): Promise<Transaction[]> {
    const transactions = await this.transactionsRepository.list();

    return transactions;
  }
}
