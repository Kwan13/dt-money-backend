import { inject, injectable } from 'tsyringe';
import { ITransactionsRepository } from '../../repositories/ITransactionsRepository';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

@injectable()
export class GetBalanceUseCase {
  constructor(
    @inject('TransactionsRepository')
    private transactionsRepository: ITransactionsRepository,
  ) {}

  async execute(): Promise<Balance> {
    const balance = await this.transactionsRepository.getBalance();

    return balance;
  }
}
