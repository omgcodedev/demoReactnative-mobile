import { ReactNode } from 'react';

export interface ContextProps {
  [key: string]: string | ReactNode;
}

export interface User {
  name: string;
  surname: string;
  email: string;
  role: string;
  walletAddress: string;
  authenticatedByGoogle: boolean;
}

export enum UserRoles {
  ADMIN = 'admin',
  BASIC = 'basic',
}
