import { Router } from 'express';
import * as userController from '../../controllers/userController';
import validateBody from '../../middlewares/userMiddleware';

const userRouter = Router();

userRouter.get('/:id', userController.getById);
userRouter.get('/', userController.getAll);

userRouter.use(validateBody);

userRouter.post('/', userController.create);
userRouter.put('/:id', userController.update);

export default userRouter;