import * as userModel from '../models/userModel';
import { User } from '../interfaces';

export async function getAll(): Promise<User[]> {
  const users = await userModel.getAll();

  return users;
}