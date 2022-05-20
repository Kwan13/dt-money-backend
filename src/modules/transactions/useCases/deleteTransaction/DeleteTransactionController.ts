import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteTransactionUseCase } from './DeleteTransactionUseCase';

export class DeleteTransactionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;

    const deleteTransactionUseCase = container.resolve(
      DeleteTransactionUseCase,
    );

    const transaction = await deleteTransactionUseCase.execute({ id });

    return response.status(200).json(transaction);
  }
}
