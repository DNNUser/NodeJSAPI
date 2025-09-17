import express from 'express';
import productsRouter from './routes/products';
import { reqLog} from './middleware/reqLog';
import { errHandler } from './middleware/errHandler';
import { loadProducts } from './data/products';

const app = express();

loadProducts();

app.use(express.json());
app.use(reqLog);

app.use('/api', productsRouter);
app.use(errHandler);

export default app;