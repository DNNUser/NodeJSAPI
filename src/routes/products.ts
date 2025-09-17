import { Router, Request, Response } from 'express';
import { getProducts } from '../data/products';
import { Product } from '../types/product';

const router = Router();

router.get('/products', async (req: Request, res: Response) => {
  const controller = new AbortController();
  req.on('aborted', () => controller.abort());

  try {
    const { view , q, new: isNewParam,price  } = req.query as {
      view?: 'admin' | 'doctor';
      q?: string;
      new?: 'true' | 'false';
      limit?: string;
      price?: string;
    };
    let filtered = getProducts();
    if (view){
    filtered = filtered.filter((p: Product) => p.visibleTo.includes(view));
  }
    if (q) {
      filtered = filtered.filter((p: Product) => p.publicName.toLowerCase().includes(q.toLowerCase()));
    }

    if (isNewParam === 'true') {
      const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
      filtered = filtered.filter((p: Product) => new Date(p.createdAt) > thirtyDaysAgo);
    }

    let result = filtered.map((p: Product) => ({
      id: p.id,
      name: p.publicName,
      category: p.category,
      brand: p.brand,
      price: p.priceCents,
      isNew: new Date(p.createdAt) > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
    }));

    
    res.json(result);
    
  } catch (err) {
    if (controller.signal.aborted) {
      res.status(499).json({ error: 'Request cancelled' });
    } else {
      throw err;
    }
  }
});



export default router;