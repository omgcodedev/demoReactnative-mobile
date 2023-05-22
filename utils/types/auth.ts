import {User} from './user';

export interface AuthResponse {
  success: boolean;
  token: string;
  userData?: UserData;
  error?: string;
  email: string;
  existingUser?: User;
  user?: User;
};

export interface UpdateUserResponse {
  success: boolean;
  token: string;
};

export interface UserData {
  token: string;
  user: User;
};
