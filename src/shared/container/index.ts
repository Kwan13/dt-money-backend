import { container } from 'tsyringe';
import { TransactionsRepository } from '../../modules/transactions/repositories/implementations/TransactionsRepository';
import { ITransactionsRepository } from '../../modules/transactions/repositories/ITransactionsRepository';

container.registerSingleton<ITransactionsRepository>(
  'TransactionsRepository',
  TransactionsRepository,
);
