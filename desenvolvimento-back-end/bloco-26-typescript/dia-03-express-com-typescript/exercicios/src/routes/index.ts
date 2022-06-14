import { Router } from 'express';
import userRouter from './userRoutes';
import postRouter from './postRouter';

const router = Router();

router.use('/users', userRouter);
router.use('/posts', postRouter);

export default router;