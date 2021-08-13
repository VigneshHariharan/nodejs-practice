export interface IUser {
  name?: string;
  email: string;
  mobile_number?: string;
  description?: string;
  password: string;
  profile_photo?: string;
}

export interface IUserIndexModel {
  results: IUser[];
}
