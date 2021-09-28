import { Router } from 'express';
import clientRoutes from './client.routes';
import productRoutes from './product.routes';
/* import productRouter from './product.routes'; */

const routes = Router();
routes.use('/client', clientRoutes);
routes.use('/product', productRoutes);

/*routes.use('/products', productRouter); */

export default routes;
