import { Router } from 'express';
import * as postController from '../../controllers/postController';
import postMiddleware from '../../middlewares/postMiddleware';

const postRouter = Router();

postRouter.get('/search', postController.getAllBySearchTerm);
postRouter.get('/', postController.getAll);
postRouter.get('/:id', postController.getById);
postRouter.delete('/:id', postController.remove);

postRouter.use(postMiddleware);

postRouter.post('/', postController.create);
postRouter.put('/:id', postController.update);

export default postRouter;