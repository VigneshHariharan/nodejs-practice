export interface INote {
  title?: string;
  study_resources?: string;
  content: string;
  revised_at?: string;
  is_private?: boolean;
}

export interface IUser {
  // username: string;
  email: string;
  password: string;
}
