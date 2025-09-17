import { Request, Response, NextFunction } from 'express';
import pino from 'pino';

const logger = pino();
//found from StackOverflow....
export const reqLog = (req: Request, res: Response, next: NextFunction) => {
   logger.info(`${req.method} ${req.url}`);

  next();
};
