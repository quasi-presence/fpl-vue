export interface IUser {
  id: number | null;
  email: string | null;
  token: string | null;
}

export interface ILeague {
  id: number;
  name: string;
  imageUrl?: string;
  memberCount?: number;
  position?: number;
}
