import { Router } from 'express';
import userRouter from './userRoutes/routes';
import postRouter from './postRouter/routes';
import productRouter from './productRouter/routes';

const router = Router();

router.use('/users', userRouter);
router.use('/posts', postRouter);
router.use('/products', productRouter);

export default router;