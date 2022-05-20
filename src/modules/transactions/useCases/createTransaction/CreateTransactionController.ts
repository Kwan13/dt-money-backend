import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateTransactionUseCase } from './CreateTransactionUseCase';

export class CreateTransactionController {
  async handle(request: Request, response: Response) {
    const { title, category, type, value } = request.body;

    const createTransactionUseCase = container.resolve(
      CreateTransactionUseCase,
    );

    const transaction = await createTransactionUseCase.execute({
      title,
      category,
      type,
      value,
    });

    return response.status(201).json(transaction);
  }
}
