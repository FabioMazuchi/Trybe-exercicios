import { Router } from 'express';
import * as userController from '../../controllers/userController';

const userRouter = Router();

userRouter.get('/', userController.getAll);

export default userRouter;