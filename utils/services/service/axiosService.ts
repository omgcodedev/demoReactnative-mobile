import axios, { AxiosRequestConfig } from "axios";
import * as asyncStorage from "./asyncStorageService";
import asyncStorageKeys from "../../constants/asyncStorageKeys";
import env from "../../constants/env";

export const axiosInstance = axios.create({
  baseURL: env.apiBaseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    const token = await asyncStorage.getItemFromAsyncStorage(
      asyncStorageKeys.TOKEN_KEY
    );

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
