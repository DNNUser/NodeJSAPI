import { Request, Response, NextFunction } from 'express';
import pino from 'pino';

const logger = pino();

export const reqLog = (req: Request, res: Response, next: NextFunction) => {
  logger.info(`${req.method} ${req.url}`);

  next();
};
