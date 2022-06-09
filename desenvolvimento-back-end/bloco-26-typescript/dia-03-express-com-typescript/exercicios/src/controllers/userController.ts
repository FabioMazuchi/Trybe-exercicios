import { Response, Request } from 'express';
import * as userService from '../services/userService'; 

export async function getAll(req: Request, res: Response) {
  const users = await userService.getAll();

  res.status(200).json(users);
}

export async function getById(req: Request, res:Response) {
  const { id } = req.params;
  const { status, data, error } = await userService.getById(Number(id));

  return error
   ? res.status(status).json({ error })
   : res.status(status).json(data);
}

export async function create(req: Request, res: Response) {
  const user = req.body;
  const { data, status, error } = await userService.create(user);
  
  return error
    ? res.status(status).json({ error })
    : res.status(status).json(data);
}