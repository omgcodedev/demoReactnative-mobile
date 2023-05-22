import { Routes } from "../navigation/routes";

export interface ProfileSettings {
  title: string;
  screen?: any;
}

export interface Settings {
  info: Array<ProfileSettings>;
}

export const ProfileSettings: Array<ProfileSettings> = [
  {
    title: "Edit Profile",
    screen: Routes.EDIT_PROFILE,
  },
  {
    title: "Favorites",
    screen: "",
  },
  {
    title: "Become a Provenance PRO",
    screen: Routes.BECOME_PROVENANCE_PRO,
  },
];

export const AccountSettings: Array<ProfileSettings> = [
  {
    title: "Account",
    screen: Routes.ART_BASEL,
  },
  {
    title: "Payment",
    screen: "",
  },
  {
    title: "Change Email",
    screen: Routes.CHANGE_EMAIL,
  },
  {
    title: "Change Password",
    screen: Routes.CHANGE_PASS,
  },
  {
    title: "Purchase History",
    screen: "",
  },
  {
    title: "Push Notifications",
    screen: "",
  },
  {
    title: "About",
    screen: "",
  },
];
