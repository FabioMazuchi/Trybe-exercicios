export interface UserCredentials {
  email: string
  password: string
}

export interface IUser extends UserCredentials {
  name: string
}

export interface User extends IUser {
  id: number
}

export interface ObjError {
  status: number
  message: string
}