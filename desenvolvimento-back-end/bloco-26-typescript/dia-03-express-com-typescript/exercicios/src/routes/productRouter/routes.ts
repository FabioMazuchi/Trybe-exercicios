import { Router } from 'express';
import * as productController from '../../controllers/productController';
import validateBody from '../../middlewares/productMiddleware';

const productRouter = Router();

productRouter.get('/n-expired', productController.getAllNotExpired);
productRouter.get('/price', productController.getAllByPriceRange);
productRouter.get('/', productController.getAll);
productRouter.get('/:id', productController.getById);
productRouter.delete('/:id', productController.remove);

productRouter.use(validateBody);

productRouter.post('/', productController.create);
productRouter.put('/:id', productController.update);

export default productRouter;