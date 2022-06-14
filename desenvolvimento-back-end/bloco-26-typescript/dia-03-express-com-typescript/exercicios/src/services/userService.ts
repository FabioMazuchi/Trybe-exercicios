import * as userModel from '../models/userModel';
import { IUser } from '../interfaces';

const MESSAGES = {
  USER_NOT_FOUND: 'User not found',
  UNAUTHORIZED: 'Invalid email or password',
  USER_EXISTS: 'User already exists',
};

export async function getAll() {
  const users = await userModel.getAll();

  return users;
}

export async function getById(id: number) {
  const data = await userModel.getById(id);

  if (data === null) return { status: 404, error: { message: MESSAGES.USER_NOT_FOUND } };
  return { status: 200, data };
}

export async function create(user: IUser) {
  const userExists = await userModel.getByEmail(user.email);
  if (userExists) return { status: 400, error: MESSAGES.USER_EXISTS };

  const data = await userModel.create(user);
  return { status: 201, data };
}

export async function update(id: number, user: IUser) {
  const userExists = await userModel.getById(id);
  if (!userExists) return { status: 404, error: { message: MESSAGES.USER_NOT_FOUND } };

  const data = await userModel.update(id, user);
  if (data === null) return { status: 404, error: { message: MESSAGES.USER_NOT_FOUND } };

  return { status: 200, data };
}