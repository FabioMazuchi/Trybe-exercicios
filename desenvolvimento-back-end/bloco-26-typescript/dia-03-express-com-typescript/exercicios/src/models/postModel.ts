import { ResultSetHeader } from 'mysql2';
import { IPost, Post } from '../interfaces';
import connection from './connection';

export async function getAll(): Promise<Post[]> {
  const [posts] = await connection.execute('SELECT * FROM Posts');
  
  return posts as Post[];
}

export async function getById(id: number): Promise<Post | null> {
  const q = 'SELECT * FROM Posts WHERE id=?';
  const [result] = await connection.execute(q, [id]);
  const [data] = result as Post[];

  return data || null;
}

export async function create(post: IPost): Promise<Post> {
  const { title, author, category, publicationDate } = post;
  const q = 'INSERT INTO Posts (title, author, category, publicationDate) VALUES (?,?,?,?)';
  const values = [title, author, category, publicationDate];

  const [result] = await connection.execute<ResultSetHeader>(q, values);
  const { insertId: id } = result;
  const newPost = { id, title, author, category, publicationDate };

  return newPost;
}

export async function update(post: IPost, id: number): Promise<Post> {
  const { title, author, category, publicationDate } = post;
  const q = 'UPDATE Posts SET title=?, author=?, category=?, publicationDate=? WHERE id=?';
  const values = [title, author, category, publicationDate, id];

  await connection.execute(q, values);
  const postUpdate = { id, title, author, category, publicationDate };

  return postUpdate;
}

export async function remove(id: number): Promise<Post | null> {
  const postDeleted = await getById(id);
  if (!postDeleted) return null;

  const q = 'DELETE FROM Posts WHERE id=?';
  await connection.execute(q, [id]);

  return postDeleted;
}

export async function getAllBySearchTerm(term: string): Promise<Post[]> {
  const query = `SELECT * FROM Posts WHERE title LIKE ? OR 
  author LIKE ? OR category LIKE ? OR publicationDate LIKE ?`;
  const values = [`%${term}%`, `%${term}%`, `%${term}%`, `%${term}%`];

  const [posts] = await connection.execute(query, values);

  return posts as Post[];
}
