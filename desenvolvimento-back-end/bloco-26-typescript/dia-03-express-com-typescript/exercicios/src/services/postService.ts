import { IPost } from '../interfaces';
import * as postModel from '../models/postModel';

const MESSAGES = {
  POST_NOT_FOUND: 'Post not found',
};

export async function getAll() {
  const data = await postModel.getAll();
  
  return { status: 200, data };
}

export async function getById(id: number) {
  const data = await postModel.getById(id);
  
  if (data === null) return { status: 400, error: { message: MESSAGES.POST_NOT_FOUND } };
  
  return { status: 200, data };
}

export async function create(post: IPost) {
  const data = await postModel.create(post);

  return { status: 201, data };
}

export async function update(post: IPost, id: number) {
  const posExists = await postModel.getById(id);
  if (!posExists) return { status: 404, error: { message: MESSAGES.POST_NOT_FOUND } };

  const data = await postModel.update(post, id);

  return { status: 201, data };
}

export async function remove(id: number) {
  const data = await postModel.remove(id);
  if (data === null) return { status: 404, error: { message: MESSAGES.POST_NOT_FOUND } };

  return { status: 200, data };
}

export async function getAllBySearchTerm(term: string) {
  const data = await postModel.getAllBySearchTerm(term);

  if (!data || data.length === 0) {
    return { status: 404, error: { message: MESSAGES.POST_NOT_FOUND } };
  }

  return { status: 200, data };
}
