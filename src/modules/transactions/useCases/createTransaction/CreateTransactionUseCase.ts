import { Transaction } from '@prisma/client';
import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../errors/AppError';
import { ITransactionsRepository } from '../../repositories/ITransactionsRepository';

interface CreateTransactionUseCaseRequest {
  title: string;
  value: number;
  type: 'income' | 'outcome';
  category: string;
}

@injectable()
export class CreateTransactionUseCase {
  constructor(
    @inject('TransactionsRepository')
    private transactionsRepository: ITransactionsRepository,
  ) {}

  async execute({
    title,
    category,
    type,
    value,
  }: CreateTransactionUseCaseRequest): Promise<Transaction> {
    const balance = await this.transactionsRepository.getBalance();

    if (type === 'outcome' && value > balance.total) {
      throw new AppError(
        'O valor de saída não pode ser superior ao saldo atual.',
      );
    }

    const transaction = await this.transactionsRepository.create({
      title,
      category,
      type,
      value,
    });

    return transaction;
  }
}
