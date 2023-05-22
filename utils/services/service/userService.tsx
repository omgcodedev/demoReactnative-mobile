import { Context } from "react";
import { UserData } from "../../../types/userData.types";
import { ContextProps } from "../../types/user";
import { Contextualizer } from "../contextualizer";
import { ProvidedServices } from "../providedServices";
import { axiosInstance } from "./axiosService";
import { UpdateUserResponse } from "../../types/auth";

export interface IUserService {
  getCurrentUser(): Promise<UserData>;
  update(data: UserData): Promise<UpdateUserResponse>;
  changePassword(oldPassword: string, newPassword: string): Promise<UpdateUserResponse>;
}

export const UserServiceContext: Context<IUserService | undefined> =
  Contextualizer.createContext(ProvidedServices.UserService);

export const UserService = ({ children }: ContextProps): JSX.Element => {
  const userService = {
    async update(data: UserData): Promise<UpdateUserResponse> {
      try {
        const updated = await axiosInstance.put(`/users/update`, {
          data,
        });
        return updated.data;
      } catch (error) {
        console.error(error);
      }
    },
    async getCurrentUser(): Promise<UserData> {
      try {
        const response = await axiosInstance.get(`/users/me`);
        return response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async changePassword(oldPassword: string, newPassword: string): Promise<UpdateUserResponse> {
      try {
        const response = await axiosInstance.put(`/users/change-password`, {
          oldPassword,
          newPassword,
        });
        
        return response.data;
      } catch (error) {
        console.error(error);
      }
    },
  };

  return (
    <UserServiceContext.Provider value={userService}>
      {children}
    </UserServiceContext.Provider>
  );
};
