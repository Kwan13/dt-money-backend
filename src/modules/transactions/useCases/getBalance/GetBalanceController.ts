import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { GetBalanceUseCase } from './GetBalanceUseCase';

export class GetBalanceController {
  async handle(request: Request, response: Response) {
    const getBalanceUseCase = container.resolve(GetBalanceUseCase);

    const balance = await getBalanceUseCase.execute();

    return response.status(200).json(balance);
  }
}
