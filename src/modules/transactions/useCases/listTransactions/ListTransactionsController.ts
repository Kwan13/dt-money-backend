import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListTransactionsUseCase } from './ListTransactionsUseCase';

export class ListTransactionsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listTransactionsUseCase = container.resolve(ListTransactionsUseCase);

    const transactions = await listTransactionsUseCase.execute();

    return response.status(200).json(transactions);
  }
}
