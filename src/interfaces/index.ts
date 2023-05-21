export interface IUser {
  id: number | null;
  email: string | null;
  imageUrl: string | null;
  token: string | null;
}

export interface ILeague {
  id: number;
  name: string;
  imageUrl?: string;
  memberCount?: number;
  position?: number;
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface IProfileData extends IUser {
  password: string | null;
  passwordConfirmation: string | null;
}
