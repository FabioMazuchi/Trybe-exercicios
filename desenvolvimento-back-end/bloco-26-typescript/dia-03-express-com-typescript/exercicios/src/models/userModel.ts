import connection from './connection';
import { User } from '../interfaces';

export async function getAll(): Promise<User[]> {
  const query = 'SELECT * FROM Users';
  const [users] = await connection.execute(query);

  return users as User[];
}