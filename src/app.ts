import express from 'express';
 
import { reqLog } from './middleware/reqLog';
import { errHandler } from './middleware/errHandler';

const app = express();

 
app.use(reqLog);

 
app.use(errHandler);

export  default app;