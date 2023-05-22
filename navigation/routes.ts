import { UserData } from "../types/userData.types";

export enum Routes {
  HOME_STACK = "Home_Stack",
  HOME = "Home",
  SERVICE_MARKETPLACE = "Service_Marketplace",
  CONNECTION = "Connection",
  ART_BASEL = "Art_Basel",
  USER_SETTINGS = "User_Settings",
  BECOME_PROVENANCE_PRO = "Become_Provenance_Pro",
  ART_BASEL_DETAIL = "Art_Basel_Detail",
  PROFILE = "Profile",
  EDIT_PROFILE = "Edit Profile",
  CHANGE_PASS = "Change Password",
  MY_COLLECTION = "My_Collection",
  PURCHASE = "Purchase",
  SELECT_PROVENANCE_PRO = "Select_Provenance_Pro",
  SELECT_SERVICE_MARKETPLACE = "Select_Service_Marketplace",
  LOGIN = "Login",
  CHANGE_EMAIL = "Change Email",
  TAB_NAVIGATOR = "Tab_Navigator",
  EXPLORE_LISTS = "Explore_Lists",
  COLLECTIONS = "Collections",
  SIGNUP = "Signup",
  RECOVER_PASSWORD = "Recover_Password",
  CODE_VALIDATION = "Code_Validation",
  NEW_PASSWORD = "New_Password",
  NOTIFICATIONS = "Notifications",
  OFFER_CHAT = "Offer_Chat",
  NEW_OFFER = "New_Offer",
  CONFIRM_OFFER = "Confirm_Offer",
}

export type RootStackParamList = {
  [Routes.HOME_STACK]: { id: number } | undefined;
  [Routes.HOME]: { id: number } | undefined;
  [Routes.SERVICE_MARKETPLACE]: { id: number } | undefined;
  [Routes.CONNECTION]: { id: number } | undefined;
  [Routes.ART_BASEL]: { id: number } | undefined;
  [Routes.ART_BASEL_DETAIL]: { id: number } | undefined;
  [Routes.PROFILE]: { id: number; owner: string } | undefined;
  [Routes.USER_SETTINGS]: { id: number } | undefined;
  [Routes.EDIT_PROFILE]: { id: number; user: UserData } | undefined;
  [Routes.MY_COLLECTION]: { id: number } | undefined;
  [Routes.CHANGE_PASS]: { id: number } | undefined;
  [Routes.PURCHASE]: { id: number } | undefined;
  [Routes.SELECT_PROVENANCE_PRO]: { type: string } | undefined;
  [Routes.SELECT_SERVICE_MARKETPLACE]: { type: string } | undefined;
  [Routes.LOGIN]: { id: number } | undefined;
  [Routes.CHANGE_EMAIL]: { id: number } | undefined;
  [Routes.TAB_NAVIGATOR]: { id: number } | undefined;
  [Routes.EXPLORE_LISTS]: { id: number } | undefined;
  [Routes.SIGNUP]: { id: number } | undefined;
  [Routes.RECOVER_PASSWORD]: { id: number } | undefined;
  [Routes.CODE_VALIDATION]: { id: number; email: string } | undefined;
  [Routes.NEW_PASSWORD]: { id: number; email: string } | undefined;
  [Routes.NOTIFICATIONS]: { id: number } | undefined;
  [Routes.OFFER_CHAT]: { id: number } | undefined;
  [Routes.NEW_OFFER]: { id: number } | undefined;
  [Routes.CONFIRM_OFFER]: { id: number; price: string } | undefined;
};
