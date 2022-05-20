import { Router } from 'express';

import { transactionRoutes } from './transactions.routes';

export const router = Router();

router.use('/transactions', transactionRoutes);
