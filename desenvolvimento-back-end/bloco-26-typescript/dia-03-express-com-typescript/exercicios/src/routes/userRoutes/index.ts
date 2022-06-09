import { Router } from 'express';
import * as userController from '../../controllers/userController';

const userRouter = Router();

userRouter.get('/:id', userController.getById);
userRouter.get('/', userController.getAll);
userRouter.post('/', userController.create);

export default userRouter;