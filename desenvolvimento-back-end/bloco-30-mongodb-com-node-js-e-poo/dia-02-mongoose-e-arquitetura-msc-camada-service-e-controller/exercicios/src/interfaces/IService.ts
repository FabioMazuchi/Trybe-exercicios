interface IService<T> {
  read(): Promise<T[]>;
  delete(_id: string): Promise<T | null>;
}

export default IService;