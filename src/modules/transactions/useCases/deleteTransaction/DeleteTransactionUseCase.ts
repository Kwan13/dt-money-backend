import { Transaction } from '@prisma/client';
import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../errors/AppError';

import { ITransactionsRepository } from '../../repositories/ITransactionsRepository';

interface DeleteTransactionUseCaseRequest {
  id: string;
}

@injectable()
export class DeleteTransactionUseCase {
  constructor(
    @inject('TransactionsRepository')
    private transactionsRepository: ITransactionsRepository,
  ) {}

  async execute({ id }: DeleteTransactionUseCaseRequest): Promise<Transaction> {
    try {
      const transaction = await this.transactionsRepository.delete(id);

      return transaction;
    } catch {
      throw new AppError('Esta transação não existe.');
    }
  }
}
