import {UserRoles} from "../utils/types/user"

export type UserData = {
  _id: string;
  authenticatedByGoogle: boolean;
  avatar: string;
  bio: string;
  email: string;
  emailVerificationCode: string | number;
  engagement: object;
  fullName: string;
  id: string;
  posts: object;
  role: UserRoles;
  userName: string;
  userType: string;
};
