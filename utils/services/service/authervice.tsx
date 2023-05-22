import { Context } from "react";
import { ContextProps, User } from "../../types/user";
import { AuthResponse } from "../../types/auth";
import * as asyncStorage from "./asyncStorageService";
import { Contextualizer } from "../contextualizer";
import { ProvidedServices } from "../providedServices";
import asyncStorageKeys from "../../constants/asyncStorageKeys";
import { axiosInstance } from "./axiosService";
import env from "../../constants/env";

export interface IAuthService {
  login(email: string, password: string): Promise<AuthResponse>;
  signup(email: string, password: string): Promise<AuthResponse>;
  changePassword(
    oldPassword: string,
    newPassword: string
  ): Promise<AuthResponse>;
  logout(): Promise<{
    success: boolean;
    message?: string;
    error?: string;
  }>;
  signupByGoogle(googleToken: string): Promise<AuthResponse>;
  loginByGoogle(googleToken: string): Promise<AuthResponse>;
  loginByTwitter(socketId: string, signUp: boolean): Promise<Window>;
  sendRecoverPasswordEmail(email: string): Promise<{
    success: boolean;
    message?: string;
    error?: string;
  }>;
  checkVerificationCode(
    emailVerificationCode: string,
    email: string | Array<string>
  ): Promise<{
    success: boolean;
    message?: string;
    user?: User;
  }>;
  updateForgottenPassword(
    password: string,
    email: string
  ): Promise<{
    success: boolean;
    message?: string;
    error?: string;
  }>;
}

export const AuthServiceContext: Context<IAuthService | undefined> =
  Contextualizer.createContext(ProvidedServices.AuthService);

export const useAuthServices = (): IAuthService =>
  Contextualizer.use<IAuthService>(ProvidedServices.AuthService);

export const AuthService = ({ children }: ContextProps): JSX.Element => {
  const authService = {
    async login(email: string, password: string): Promise<AuthResponse> {
      try {

        const response = await axiosInstance.post("/users/login", {
          email,
          password,
        });

        const data = response?.data;
        if (data?.userData?.token) {
          asyncStorage.setItemInAsyncStorage(
            asyncStorageKeys.TOKEN_KEY,
            data.userData.token
          );
        }

        return data;
      } catch (err) {
        console.log(err);
      }
    },

    async signupByGoogle(googleToken: string): Promise<AuthResponse> {
      try {
        const response = await axiosInstance.post("/users/signup/google", {
          googleToken,
        });

        if (response.data.token) {
          asyncStorage.setItemInAsyncStorage(
            asyncStorageKeys.TOKEN_KEY,
            response.data.token
          );
        }

        return response.data;
      } catch (err) {
        console.log(err);
      }
    },

    async loginByGoogle(googleToken: string): Promise<AuthResponse> {
      try {
        const response = await axiosInstance.post("/users/login/google", {
          googleToken,
        });
        if (response.data.token) {
          asyncStorage.setItemInAsyncStorage(
            asyncStorageKeys.TOKEN_KEY,
            response.data.token
          );
        }

        return response.data;
      } catch (err) {
        console.log(err);
      }
    },

    async signup(email: string, password: string): Promise<AuthResponse> {
      try {
        const response = await axiosInstance.post("/users/signup", {
          email: email,
          password: password,
        });
        const data = response?.data;

        if (data.token) {
          asyncStorage.setItemInAsyncStorage(
            asyncStorageKeys.TOKEN_KEY,
            data.token
          );
        }

        return data;
      } catch (err) {
        console.log(err);
      }
    },

    async checkVerificationCode(
      emailVerificationCode: string,
      email: string
    ): Promise<{ success: boolean; message?: string; user?: User }> {
      try {
        const response = await axiosInstance.post("/users/check-mail", {
          emailVerificationCode,
          email,
        });

        return response.data;
      } catch (err) {
        console.log(err);
      }
    },

    async changePassword(
      oldPassword: string,
      newPassword: string
    ): Promise<AuthResponse> {
      try {
        const response = await axiosInstance.put("/users/change-password", {
          oldPassword,
          newPassword,
        });

        return response.data;
      } catch (err) {
        console.log(err);
      }
    },

    async logout(): Promise<{
      success: boolean;
      message?: string;
      error?: string;
    }> {
      try {
        const response = await axiosInstance.post("/users/logout");
        if (response.data) {
          asyncStorage.clearAsyncStorage();
        }
        return response.data;
      } catch (err) {
        console.log(err);
      }
    },

    async loginByTwitter(socketId: string, signUp: boolean): Promise<Window> {
      const width = 600,
        height = 600;
      const left = window.innerWidth / 2 - width / 2;
      const top = window.innerHeight / 2 - height / 2;
      const params = new URLSearchParams();
      params.append("socketId", socketId);
      params.append("signUp", signUp.toString());
      params.toString();
      const url = `${env.apiBaseUrl}/users/login/twitter?${params}`;
      return window.open(
        url,
        "",
        `toolbar=no, location=no, directories=no, status=no, menubar=no, 
        scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
        height=${height}, top=${top}, left=${left}`
      );
    },

    async sendRecoverPasswordEmail(email: string): Promise<{
      success: boolean;
      message?: string;
      error?: string;
    }> {
      try {
        const response = await axiosInstance.post("/users/recover-password", {
          email,
        });

        return response.data;
      } catch (err) {
        console.log(err);
      }
    },

    async updateForgottenPassword(
      password: string,
      email: string
    ): Promise<{
      success: boolean;
      message?: string;
      error?: string;
    }> {
      try {
        const response = await axiosInstance.put(
          `/users/update-forgotten-password`,
          {
            newPassword: password,
            email,
          }
        );

        return response.data;
      } catch (err) {
        console.log(err);
      }
    },
  };

  return (
    <AuthServiceContext.Provider value={authService}>
      {children}
    </AuthServiceContext.Provider>
  );
};
