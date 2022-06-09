import { Response, Request } from 'express';
import * as userService from '../services/userService'; 

export async function getAll(req: Request, res: Response) {
  const users = await userService.getAll();

  res.status(200).json(users);
}