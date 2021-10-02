import { Router } from 'express';
import clientRoutes from './client.routes';
import productRoutes from './product.routes';
import studentRoutes from './student.routes';
/* import productRouter from './product.routes'; */

const routes = Router();
routes.use('/client', clientRoutes);
routes.use('/product', productRoutes);
routes.use('student', studentRoutes)
/*routes.use('/products', productRouter); */

export default routes;
